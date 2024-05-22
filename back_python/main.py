import os
import sys

sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app import app
import uvicorn
from fastapi import FastAPI
from app.main_router import router

router = FastAPI()

router.include_router(router, prefix="/api")

@app.get("/")
def read_root():
    return {"Hello": "World"}

if __name__ == "__main__":
    uvicorn.run(router, host="localhost", port=8000)