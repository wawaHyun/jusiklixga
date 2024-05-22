

import pandas as pd

from news_dataset import NewsDataset


class NewsModel:
    def __init__(self) -> None:
        self.ds = NewsDataset()
        # this = self.ds

    def new_dataframe_with_index(self, fname: pd.DataFrame) -> pd.DataFrame:
        this = self.ds
        return pd.read_csv(f'{this.dname}{fname}',index_col=0)    
    

    def new_dataframe_no_index(self, fname: str) -> object:
        this = self.ds
        return pd.read_csv(f'{this.dname}{fname}')



    def save_model(self, fname, dframe: pd.DataFrame) -> pd.DataFrame:
        this =self.ds
        return dframe.to_csv(f'{this.sname}{fname}',sep=',',na_rep='NaN') 