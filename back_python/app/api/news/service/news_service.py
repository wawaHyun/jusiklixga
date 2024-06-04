import os

from icecream import ic

# from app.api.news.model.news_dataset import NewsDataset


class NewsService:

    # dataset = NewsDataset()

    def __init__(self) :
        pass
        # self.data = self.dataset

    def preprocess(self) :
        print(f'전처리 시작')

    def title(self) :
        ic(f'제목 추출 시작')

if __name__ == '__main__':
    news = NewsService()

    os.path.exists('app.api.news.model.news_dataset') 
    if not os.path.exists('app.api.news.model.news_dataset'):
        ic('app.api')
	# os.mkdir('app.api.news.model.news_dataset')

    PATH = os.getcwd()
    os.path.abspath(PATH)
    ic(f'현재 경로 : {PATH}')

    news.preprocess()