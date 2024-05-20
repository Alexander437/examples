from typing import Annotated, List

from fastapi import APIRouter, Depends

from schemas import STaskAdd, STask, STaskId
from repository import TaskRepository

router = APIRouter(
    prefix="/tasks",
    tags=["tasks"],
)


@router.post("/")
async def add_task(
        task: Annotated[STaskAdd, Depends()]  # Легче вводить данные в localhost/docs
) -> STaskId:
    task_id = await TaskRepository.add_one(task)
    return STaskId(**{"ok": True, "task_id": task_id})


@router.get("/")
async def get_tasks() -> List[STask]:
    tasks = await TaskRepository.find_all()
    return tasks

