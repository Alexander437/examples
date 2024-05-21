from fastapi_users import schemas


class UserRead(schemas.BaseUser[int]):
    id: int
    email: str
    username: str
    role_id: int
    is_active: bool | None = True
    is_superuser: bool | None = False
    is_verified: bool | None = False

    class ConfigDict:  # Config
        from_attributes = True  # orm_mode = True


class UserCreate(schemas.BaseUserCreate):
    email: str
    username: str
    password: str
    role_id: int
    is_active: bool | None = True
    is_superuser: bool | None = False
    is_verified: bool | None = False


class UserUpdate(schemas.BaseUserUpdate):
    email: str
    username: str
    password: str
    role_id: int
    is_active: bool | None = True
    is_superuser: bool | None = False
    is_verified: bool | None = False
