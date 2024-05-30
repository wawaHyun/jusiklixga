'use server'


import client from "@/lib/db";
import { NextResponse } from "next/server";
import { IBoardtype } from "./model/board-model";

export async function AllBoardList() {
    const response: IBoardtype[] = await client.boards.findMany({})
    console.log(JSON.stringify(response))
    return response
}

export async function FindSingleBoard(id: number) {
    const response = await client.boards.findFirst({
        where: {
            id: id,
        },
    })
    console.log(JSON.stringify(response))
    return response
}

export async function UpdateBoard(data: IBoardtype) {
    const { id, title, description } = data
    const response = await client.boards.update({
        where: {
            id: id,
        },
        data: {
            title: title,
            description: description,
        }
    })
    console.log(JSON.stringify("UpdateBoard :" + response))
    return response
}