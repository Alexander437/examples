# uvicorn main:app --reload
# http://127.0.0.1:8000/docs
# http://127.0.0.1:8000/redoc
# https://github.com/artemonsh/fastapi_crash_course
from contextlib import asynccontextmanager

from fastapi import FastAPI
from router import router as tasks_router
from database import create_tables, delete_tables


@asynccontextmanager
async def lifespan(app: FastAPI):
    await delete_tables()
    print("База очищена")
    await create_tables()
    print("База готова")
    yield
    print("Выключение")


app = FastAPI(lifespan=lifespan)
app.include_router(tasks_router)
