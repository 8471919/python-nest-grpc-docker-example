from src.proto.model_pb2 import ModelReturn
from src.proto import model_pb2_grpc
from src.models.model import Model
import tensorflow as tf
import cv2
import os
import numpy as np
import requests
from PIL import Image


class ModelService(model_pb2_grpc.ModelService):
    def __init__(self):
        self.model = Model()
        self.model.setup()
        self.dirname = os.path.dirname(__file__)
        self.dirname = os.path.join(self.dirname, "../models/images")
        print(self.dirname)

    async def getLabel(self, request, context):
        url = request.url

        res = requests.get(url)

        img = np.frombuffer(res.content, dtype=np.uint8)
        img = cv2.imdecode(img, cv2.IMREAD_COLOR)

        img = cv2.resize(img, (32, 32))
        img = tf.expand_dims(img, axis=0)

        label = self.model.predict(img)

        result = {"label": label}

        return ModelReturn(label=label)
