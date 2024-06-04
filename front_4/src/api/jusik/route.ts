'use server'

import client from "@/lib/db";
import { INpstype } from "./model/nps-model";

export async function AllNps() {
    const response:INpstype[] = await client.npsStat.findMany({})
    return response
}

export async function ToptenNps() {
    const response:INpstype[] = await client.npsStat.findMany({
        take : 10,
        orderBy : { perAll: 'desc' }
    })
    return response
}
