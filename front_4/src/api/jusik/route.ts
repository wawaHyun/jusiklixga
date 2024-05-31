'use server'

import { INpsstasttype } from "@/app/api/jusik/model/nps-model";
import client from "@/lib/db";

export async function AllNps() {
    const response:INpsstasttype[] = await client.users.findMany({
    })
    return response
}
