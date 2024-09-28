import React from "react";
import prisma from "@/app/libs/prisma";

interface Comment{
    id: number;
    user_name: string;
    comment: string;
    mal_id: number;
}


const CommentBox = async ({ mal_id }: { mal_id: number }) => {
  const comment = await prisma.comment.findMany({
    where: {
      mal_id,
    },
  });
  return (
    <div className="grid md:grid-cols-4 gap-4 grid-cols-2">
      {comment.map((comment: Comment) => {
        return (
          <div key={comment.id} className="text-black bg-blue-500 px-3 py-2 rounded-2xl">
            <p className="font-bold text-black">{comment.user_name}</p>
            <hr />
            <p className="my-3">{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
