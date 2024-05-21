from datetime import datetime

from fastapi_users_db_sqlalchemy import SQLAlchemyBaseUserTable
from sqlalchemy import Table, Column, Integer, String, JSON, TIMESTAMP, ForeignKey, Boolean

from database import Base, metadata


role = Table(
    "role",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("name", String, nullable=False),
    Column("permissions", JSON),
)

user = Table(
    "user",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("registered_on", TIMESTAMP, nullable=False, default=datetime.utcnow),
    Column("username", String, nullable=False),
    Column("role_id", Integer, ForeignKey(role.c.id)),
    Column("email", String(length=320), unique=True, index=True, nullable=False),
    Column("hashed_password", String(length=1024), nullable=False),
    Column("is_active", Boolean, default=True, nullable=False),
    Column("is_superuser", Boolean, default=False, nullable=False),
    Column("is_verified", Boolean, default=False, nullable=False)
)


class User(SQLAlchemyBaseUserTable[int], Base):
    id = Column(Integer, primary_key=True)
    username = Column(String(255), nullable=False)
    registered_on = Column(TIMESTAMP, nullable=False, default=datetime.utcnow)
    role_id = Column(Integer, ForeignKey(role.c.id))
    email = Column(String(length=320), unique=True, index=True, nullable=False)
    hashed_password = Column(String(length=1024), nullable=False)
    is_active = Column(Boolean, default=True, nullable=False)
    is_superuser = Column(Boolean, default=False, nullable=False)
    is_verified = Column(Boolean, default=False, nullable=False)

# alembic init migrations
# configure migrations/env.py
# alembic revision --autogenerate -m "Database creation"
# alembic upgrade dbd902a137b0
# alembic upgrade head
# insert into role values (1, 'user', null);
