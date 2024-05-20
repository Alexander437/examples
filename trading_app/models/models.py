from datetime import datetime

from sqlalchemy import MetaData, Table, Column, Integer, String, JSON, TIMESTAMP, ForeignKey, Boolean

metadata = MetaData()

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
    Column("registered_on", TIMESTAMP, nullable=False),
    Column("username", String, nullable=False),
    Column("role_id", Integer, ForeignKey(role.c.id)),
    Column("email", String(length=320), unique=True, index=True, nullable=False),
    Column("hashed_password", String(length=1024), nullable=False),
    Column("is_active", Boolean, default=True, nullable=False),
    Column("is_superuser", Boolean, default=False, nullable=False),
    Column("is_verified", Boolean, default=False, nullable=False)
)

# alembic init migrations
# configure migrations/env.py
# alembic revision --autogenerate -m "Database creation"
# alembic upgrade dbd902a137b0
# insert into role values (1, 'user', null);
