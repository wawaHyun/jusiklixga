
import { Link } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import { MyTypography } from '../../common/style/cell';
import { PG } from '../../common/enums/PG';
import { deleteArticleById } from '../service/article.service';
import { useDispatch } from 'react-redux';
import PinkButton from '@/app/atoms/button/PinkButton';
import { DeleteArticle } from '@/app/api/article/route';
import { IArticletype } from '@/app/api/article/model/articel-model';

export default function ArticleColumns(): GridColDef[] {

    const dispatch = useDispatch();

    interface CellType {
        row: IArticletype;
    }

    const deletePrisma = async (id: number) => {
        try {
            await DeleteArticle(id);
        }
        catch (error) {
            console.log(error)
        }
    }

    return [
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'id',
            headerName: 'No.',
            renderCell: ({ row }: CellType) => MyTypography(row.id, "1.5rem")
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'title',
            headerName: 'TITLE',
            renderCell: ({ row }: CellType) =>
                // MyTypography(<Link href={`${PG.ARTICLE}/detail/${row.id}`}> {row.title} </Link>, "1.5rem")
                MyTypography(<Link href={`${PG.ARTICLE}/detailPrisma/${row.id}`}> {row.title} </Link>, "1.5rem")
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'content',
            headerName: 'CONTENT',
            renderCell: ({ row }: CellType) => MyTypography(row.content, "1.5rem")
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'writer',
            headerName: 'WRITER',
            renderCell: ({ row }: CellType) => MyTypography(row.writer, "1.5rem")
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'modDate',
            headerName: 'mod date',
            renderCell: ({ row }: CellType) => MyTypography(row.modDate, "1.5rem")
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'regDate',
            headerName: 'reg date',
            renderCell: ({ row }: CellType) => MyTypography(row.regDate, "1.5rem")
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'delete',
            headerName: 'DELETE',
            renderCell: ({ row }: CellType) =>
                <PinkButton text="DLELCTE" path={
                    () => {
                        const id = row.id != undefined ? row.id :0
 
                        let flag = confirm(id + "번째 article을 삭제하시겠습니까?")
                        if (flag) {
                            console.log("delete article id : {}", id)
                            // dispatch(deleteArticleById(id))
                            deletePrisma(id);
                            location.reload();
                        } else {
                            alert("article 삭제가 취소되었습니다.")
                        }
                    }} />
        }

    ]

}
