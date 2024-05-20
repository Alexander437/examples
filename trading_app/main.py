# uvicorn main:app --reload
# https://github.com/artemonsh/fastapi_course
# http://127.0.0.1:8000/docs
# http://127.0.0.1:8000/redoc
# docker run -p 5432:5432 --name pg_trading -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres -d postgres:13.3
# docker run -e 'PGADMIN_DEFAULT_EMAIL=admin@admin.admin' -e 'PGADMIN_DEFAULT_PASSWORD=admin' -d dpage/pgadmin4
from fastapi import FastAPI, Depends
from fastapi_users import FastAPIUsers

from auth.auth import auth_backend
from auth.database import User
from auth.manager import get_user_manager
from auth.schemas import UserCreate, UserRead

app = FastAPI(
    title="Trading App",
)

fastapi_users = FastAPIUsers[User, int](
    get_user_manager,
    [auth_backend],
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

current_user = fastapi_users.current_user()


@app.get("/protected-route")
def protected_route(user: User = Depends(current_user)):
    return f"Hello, {user.email}"


@app.get("/unprotected-route")
def unprotected_route():
    return "Hello, World!"
