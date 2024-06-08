from fastapi import APIRouter

from src.init import cmc_client

router = APIRouter(
    prefix="/items",
    tags=["items"],
)

items = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]


@router.get("")
async def get_list():
    return items


@router.get("/{item_id}")
async def get_item(item_id: int):
    return items[item_id]
