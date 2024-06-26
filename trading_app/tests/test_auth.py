import pytest
from sqlalchemy import insert, select

from auth.models import role
from conftest import client, async_session_maker, prepare_database


async def test_add_role():
    async with async_session_maker() as session:
        stmt = insert(role).values(id=2, name="admin", permissions=None)
        await session.execute(stmt)
        await session.commit()

        query = select(role)
        result = await session.execute(query)
        assert result.all() == [(1, 'admin', None)], "Роль не добавилась"


# def test_register():
#     response = client.post("/auth/register", json={
#         "email": "example@mail.ru",
#         "password": "PASS",
#         "is_active": True,
#         "is_superuser": False,
#         "is_verified": False,
#         "username": "user_example",
#         "role_id": 1
#     })
#
#     assert response.status_code == 201
