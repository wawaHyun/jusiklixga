
from dataclasses import dataclass
import pandas as pd


@dataclass
class NewsDataset:
    _dname : str = ''
    _sname : str = ''
    _fname : str = ''
    _id : str = ''
    _label : str = ''

    _title : str = ''
    _keyword : str = ''
   
    @property
    def dname(self) -> str : return self._dname
    @dname.setter
    def dname(self, dname: str) : self._dname = dname
    @property
    def sname(self) -> str: return self._sname
    @sname.setter
    def sname(self, sname: str): self._sname = sname
    @property
    def fname(self) -> str: return self._fname
    @fname.setter
    def fname(self, fname: str): self._fname = fname
    @property
    def id(self) -> str: return self._id
    @id.setter
    def id(self, id: str): self._id = id
    @property
    def label(self) -> str: return self._label
    @label.setter
    def label(self,label: str): self._label = label

    @property
    def title(self) -> str: return self._title
    @title.setter
    def title(self,title: str): self._title = title

    @property
    def keyword(self) -> str: return self._keyword
    @keyword.setter
    def keyword(self,keyword: str): self._keyword = keyword

    
    def new_dataframe_with_index(self, fname: pd.DataFrame) -> pd.DataFrame:
        this = self.ds
        return pd.read_csv(f'{this.dname}{fname}',index_col=0)