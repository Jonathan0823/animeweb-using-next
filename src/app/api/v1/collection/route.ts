import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
    const {mal_id, user_email} = await request.json();
    const data = {mal_id, user_email};
    const createCollection = await prisma.collection.create({
        data: data
    })

    if(!createCollection) {
        return Response.json({status: 500, inCreated: false});
    }

    return Response.json({status: 200, inCreated: true});
}