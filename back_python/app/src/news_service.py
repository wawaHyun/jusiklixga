import os

from icecream import ic

from news_dataset import NewsDataset


class NewsService:

    dataset = NewsDataset()

    def __init__(self) :
        pass
        self.data = self.dataset

    def preprocess(self) :
        print(f'전처리 시작')

    def title(self) :
        ic(f'제목 추출 시작')

if __name__ == '__main__':
    news = NewsService()

    news.preprocess()