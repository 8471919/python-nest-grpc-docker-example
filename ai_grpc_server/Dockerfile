# syntax=docker/dockerfile:1

FROM python:3.9-slim

ENV TF_ENABLE_ONEDNN_OPTS=0

ENV TF_CPP_MIN_LOG_LEVEL=2

RUN apt-get update && apt-get upgrade -y

WORKDIR /app

ENV PYTHONPATH=.

COPY . .

RUN pip install --upgrade pip && pip install -U setuptools

RUN apt-get -y install libgl1-mesa-glx

RUN apt-get install libglib2.0-0 -y

RUN pip install --upgrade tensorflow

RUN pip install opencv-python

RUN pip install grpcio-tools

RUN pip install pillow
