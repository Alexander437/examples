#!/bin/bash

alembic upgrade head
cd src
gunicorn main:app --workers 4 --worcker-class uvicorn.workers.UvicornWorker --bind=0.0.0.0:8000
