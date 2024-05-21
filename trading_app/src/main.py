# uvicorn main:app --reload
# https://github.com/artemonsh/fastapi_course
# https://github.com/zhanymkanov/fastapi-best-practices
#
# http://127.0.0.1:8000/docs
# http://127.0.0.1:8000/redoc
# docker run -p 5432:5432 --name pg_trading -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres -d postgres:13.3
# docker run -p 6379:6379 --name redis -d redis:latest
# docker run -e 'PGADMIN_DEFAULT_EMAIL=admin@admin.admin' -e 'PGADMIN_DEFAULT_PASSWORD=admin' -d dpage/pgadmin4
from fastapi import FastAPI
from fastapi_cache import FastAPICache
from fastapi_cache.backends.redis import RedisBackend

from redis import asyncio as aioredis
from auth.auth import auth_backend
from auth.base_config import fastapi_users
from auth.schemas import UserCreate, UserRead
from operations.router import router as router_operations

app = FastAPI(
    title="Trading App",
)

app.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix="/auth/jwt",
    tags=["auth"],
)

app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
    tags=["auth"],
)

app.include_router(router_operations)


@app.on_event("startup")
async def startup_event():
    redis = aioredis.from_url("redis://172.17.0.3", encoding="utf-8", decode_responses=True)
    FastAPICache.init(RedisBackend(redis), prefix="fastapi-cache")
