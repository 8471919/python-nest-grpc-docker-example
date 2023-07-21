# syntax=docker/dockerfile:1

FROM python:3.9-slim-buster

ENV TF_ENABLE_ONEDNN_OPTS=0

ENV TF_CPP_MIN_LOG_LEVEL=2

RUN apt-get update && apt-get upgrade -y

WORKDIR /app

ENV PYTHONPATH=.

COPY . .

RUN pip install --upgrade pip && pip install -U setuptools && apt-get -y install libgl1-mesa-glx && apt-get install libglib2.0-0 -y && pip install --upgrade tensorflow && pip install opencv-python && pip install grpcio-tools && pip install pillow
