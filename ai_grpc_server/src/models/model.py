from tensorflow import keras
from tensorflow.keras import layers
import numpy as np
import tensorflow as tf
import os


class Model:
    def __init__(self):
        self.EPOCHS = 30
        self.BATCH_SIZE = 256
        self.dirname = os.path.dirname(__file__)
        self.class_names = [
            "airplane",
            "automobile",
            "bird",
            "cat",
            "deer",
            "dog",
            "frog",
            "horse",
            "ship",
            "truck",
        ]

    def setup(self):
        self.model = BaseModel().build_model()
        self.model.load_weights(f"{self.dirname}/ck/cifar_10.ckpt")

    def predict(self, value):
        self.pred = self.model.predict(value)
        print(self.pred)
        self.pred = np.argmax(self.pred, axis=1)
        print(self.pred)
        print(self.class_names[self.pred[0]])

        return self.class_names[self.pred[0]]


class BaseModel:
    def build_model(self):
        self.model = keras.Sequential()
        self.model.add(
            layers.Conv2D(
                32,
                3,
                padding="same",
                activation="relu",
                input_shape=(32, 32, 3),
            )
        )
        self.model.add(layers.MaxPooling2D(2))
        self.model.add(layers.Dropout(0.3))

        self.model.add(layers.Conv2D(64, 3, padding="same", activation="relu"))
        self.model.add(layers.MaxPooling2D(2))
        self.model.add(layers.Dropout(0.3))

        self.model.add(layers.Conv2D(256, 3, padding="same", activation="relu"))
        self.model.add(layers.MaxPooling2D(2))
        self.model.add(layers.Dropout(0.3))

        self.model.add(layers.Conv2D(256, 3, padding="same", activation="relu"))
        self.model.add(layers.MaxPooling2D(2))
        self.model.add(layers.Dropout(0.3))

        self.model.add(layers.Flatten())
        self.model.add(layers.Dense(256, activation="relu"))
        self.model.add(layers.Dense(10, activation="softmax"))

        return self.model
