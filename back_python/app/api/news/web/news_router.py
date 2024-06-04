import os
import sys
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from fastapi import APIRouter
from pydantic import BaseModel
from app.api.news.service.news_service import NewsService
sys.setrecursionlimit(10000)


router = APIRouter()
service = NewsService()

class Request(BaseModel):
    question :str

class Response(BaseModel):
    answer :str

@router.get("/title")
def title(req:Request):
    print("news title")

    service.title()

    return {"answer": "news~! "}