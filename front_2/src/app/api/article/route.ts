'use server'


import client from "@/lib/db";
import { IArticletype } from "./model/articel-model";

export async function AllArticleList() {
    const response: IArticletype[] = await client.articles.findMany({})
    console.log(JSON.stringify(response))
    return response
}

export async function MyArticleList(id: string) {
    const response: IArticletype[] = await client.articles.findMany({
        where: {
            board_id: id,
        },
    })
    console.log(JSON.stringify(response))
    return response
}

export async function DeleteArticle(id: number) {
    try {
        const response = await client.articles.delete({
            where: {
                id: id,
            },
        })
        // console.log("DeleteArticle : "+response)
    } catch (err) {
        console.log(err)
    }

}

export async function FindSingleArticle(id: number) {
    try {
        const response = await client.articles.findFirst({
            where: {
                id: id,
            },
        })
        console.log(JSON.stringify(response))
        return response
    } catch (err) {
        console.log(err)
    }

}
