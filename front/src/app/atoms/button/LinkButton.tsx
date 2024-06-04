'use client'

import { PG } from '@/app/component/common/enums/PG';
import { Link } from '@mui/material';
import { JwtHeader, JwtPayload, jwtDecode } from 'jwt-decode';
import { parseCookies } from 'nookies';

interface ILinkButton {
    id: number,
    title: string,
    path: string
}

const detailId:string|null = parseCookies()?.accessToken

export const linkButtonTitles = [
    { id: 0, title: 'join', path: `${PG.USER}/join` },
    { id: 1, title: 'Home', path: '/' },
    // { id: 3, title: 'counter', path: `${PG.DEMO}/counter` },
    { id: 4, title: 'board list', path: `${PG.BOARD}/list` },
    // { id:5, title: 'article list', path: `${PG.ARTICLE}/list` },
    { id: 6, title: 'My list', path: `${PG.USER}/detail/${detailId === null ? jwtDecode<any>(detailId).id:0}` }
]


export default function LinkButton({ id, title, path }: ILinkButton) {
    return (
        <li key={id}>
            <Link href={`${path}`}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
                     md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500
                      dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
                       dark:border-gray-700" aria-current="page">
                {title}
            </Link>
        </li>
    )

}