from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select, insert
from sqlalchemy.ext.asyncio import AsyncSession

from database import get_async_session
from operations.models import operation
from operations.schemas import OperationCreate

router = APIRouter(
    prefix="/operations",
    tags=["Operations"],
)


@router.get("/")
async def get_specific_operations(operation_type: str, session: AsyncSession = Depends(get_async_session)):
    # Всегда оборачивать в try/except
    # Одинаковая структура ответов
    # Обработка предусмотренных исключений
    # Логирование неизвестных ошибок
    # При чтении из БД делать пагинацию: .limit() + .offset()
    try:
        query = select(operation).where(operation.c.type == operation_type)
        result = await session.execute(query)
        # четкая структура
        return {
            "status": "success",
            "data": result.scalars().all(),
            "details": None
        }
    except ZeroDivisionError:
        raise HTTPException(status_code=500, detail={
            "status": "error",
            "data": None,
            "details": "Деление на ноль"
        })
    except Exception as e:
        return {
            "status": f"Error: {e}",
            "data": None,
            "details": None
        }


@router.post("/")
async def add_specific_operation(new_operation: OperationCreate, session: AsyncSession = Depends(get_async_session)):
    stmt = insert(operation).values(**new_operation.dict())
    await session.execute(stmt)
    await session.commit()
    return {"status": "success"}


# ORM - Object-relational model
# SQL Injection
