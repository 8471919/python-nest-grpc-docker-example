import asyncio
from grpc import aio
from src.model import model_service
from src.proto import model_pb2_grpc


async def main():
    print("Server starting...")

    server = aio.server()

    model_pb2_grpc.add_ModelServiceServicer_to_server(
        model_service.ModelService(), server
    )

    listen_addr = "[::]:50051"

    server.add_insecure_port(listen_addr)

    await server.start()

    print(f"Server start on {listen_addr} port")

    await server.wait_for_termination()


if __name__ == "__main__":
    asyncio.run(main())

# from fastapi import FastAPI
# import uvicorn


# app = FastAPI(docs_url="/api-docs", openapi_url="/open-api-docs")


# @app.get("/hi")
# async def a():
#     return "hi"


# if __name__ == "__main__":
#     print("start server")
#     uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
