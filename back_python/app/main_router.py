from fastapi import APIRouter
import os
import sys
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from app.api.demo.crawling import ScrapBugs
from app.api.news.web.news_router import router as title
from icecream import ic

router = APIRouter()

router.include_router(title, prefix="/news")


@router.get("/crawling")
def read_root(self):
    # ScrapBugs.scrap()
    ic("crawling")
    return {"Hello": "crawling"}