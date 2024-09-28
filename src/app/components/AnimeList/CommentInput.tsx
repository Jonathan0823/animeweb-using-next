"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  mal_id: number;
  user_email: string;
  user_name: string;
  title: string;
}

const CommentInput = ({ mal_id, user_email, user_name, title }: Props) => {
  const [isCreated, setIsCreated] = useState(false);

  const [comment, setComment] = useState("");
  const router = useRouter()


  const handleComment = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setComment(target.value);
  };

  const handleCommentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (comment.trim() === "") {
      return;
    }

    const data = { mal_id, user_email, user_name, comment, title };
    const res = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postComment = await res.json();
    if (postComment.status === 200) {
      setIsCreated(true);
      setComment("");
      router.refresh();
      return;
    }
    return;
  };
  return (
    <div className="w-full">
      {isCreated && <p>Comment created</p>}
      <textarea
        onChange={handleComment}
        value={comment}
        className="text-black h-32 w-full p-2 rounded-xl"
      ></textarea>
      <button
        onClick={handleCommentSubmit}
        className="bg-blue-500 p-3 px-4 rounded-2xl mt-3"
      >
        Comment
      </button>
    </div>
  );
};

export default CommentInput;
