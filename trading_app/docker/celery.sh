#!/bin/bash

cd src

if [[ "${1}" == "celery" ]]; then
  celery --app=task.tasks:celery worcker -l INFO
elif [[ "${1}" == "flower" ]]; then
  celery --app=task.tasks:celery flower
  fi