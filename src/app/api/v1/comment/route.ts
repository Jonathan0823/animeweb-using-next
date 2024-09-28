import prisma from "@/app/libs/prisma";

export async function POST(request: Request) {
    const {mal_id, user_email, user_name, comment, title} = await request.json();
    const data = {mal_id, user_email, user_name, comment, title};
    const createComment = await prisma.comment.create({
        data: data
    })

    if(!createComment) {
        return Response.json({status: 500, inCreated: false});
    }

    return Response.json({status: 200, inCreated: true});
}