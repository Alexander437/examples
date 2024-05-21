# cd src
# uvicorn main:app --reload
#
# celery -A tasks.tasks:celery worker
# celery -A tasks.tasks:celery flower
# http://0.0.0.0:5555
#
# https://github.com/artemonsh/fastapi_course
# https://github.com/zhanymkanov/fastapi-best-practices
#
# http://127.0.0.1:8000/docs
# http://127.0.0.1:8000/redoc
# docker run -p 5432:5432 --name pg_trading -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres -d postgres:13.3
# docker run -p 6379:6379 --name redis -d redis:latest
# docker run -e 'PGADMIN_DEFAULT_EMAIL=admin@admin.admin' -e 'PGADMIN_DEFAULT_PASSWORD=admin' -d dpage/pgadmin4
# docker run -p 6000:5432 --name pg_test -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres -d postgres:13.3
from fastapi import FastAPI
from fastapi_cache import FastAPICache
from contextlib import asynccontextmanager
from fastapi_cache.backends.redis import RedisBackend
from redis import asyncio as aioredis
from fastapi.middleware.cors import CORSMiddleware
from starlette.staticfiles import StaticFiles

from auth.base_config import fastapi_users, auth_backend
from auth.schemas import UserCreate, UserRead
from operations.router import router as router_operations
from tasks.router import router as router_tasks
from config import REDIS_HOST, REDIS_PORT
from pages.router import router as router_pages


@asynccontextmanager
async def lifespan(app: FastAPI):
    redis = aioredis.from_url(f"redis://{REDIS_HOST}:{REDIS_PORT}", encoding="utf-8", decode_responses=True)
    FastAPICache.init(RedisBackend(redis), prefix="fastapi-cache")
    yield


app = FastAPI(
    title="Trading App",
    lifespan=lifespan
)

app.mount("/static", StaticFiles(directory="static"), name="static")

app.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix="/auth",
    tags=["auth"],
)

app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
    tags=["auth"],
)

app.include_router(router_operations)
app.include_router(router_tasks)
app.include_router(router_pages)

# Cors - откуда разрешено отправлять запрос
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS", "DELETE", "PATCH", "PUT"],
    allow_headers=["Content-Type", "Set-Cookie", "Access-Control-Allow-Headers", "Access-Control-Allow-Origin",
                   "Authorization"],
)
