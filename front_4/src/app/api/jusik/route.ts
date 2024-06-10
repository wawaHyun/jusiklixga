'use server'

import client from "@/lib/db";
import { INpstype } from "./model/nps-model";

export async function AllNps() {
    const response: INpstype[] = await client.npsStat.findMany({
    })
    return response
}

export async function Top10Nps() {
    const response: INpstype[] = await client.npsStat.findMany({
        take: 10,
    })
    console.log("Top10Nps : "+JSON.stringify(response))
    return response
}
