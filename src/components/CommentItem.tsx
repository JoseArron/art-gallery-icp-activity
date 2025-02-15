import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { backend } from "@/declarations/backend";
import { Comment } from "@/lib/interface";
import { CommentsContext } from "@/contexts/CommentsContext";

type CommentItemProps = { data: Comment };

export default function CommentItem({ data }: CommentItemProps) {
  const { setComments } = useContext(CommentsContext);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteComment = async (id: bigint) => {
    setIsDeleting(true);
    try {
      const updatedComments: Comment[] = await backend.deleteComment(id);
      const sortedComments = [...updatedComments].sort((a, b) => {
        return Number(a.timestamp) - Number(b.timestamp);
      });
      const artworkSortedComments = sortedComments
        ? sortedComments.filter((comment) => comment.imageUrl === data.imageUrl)
        : [];
      console.log(updatedComments);
      setComments(artworkSortedComments);
    } catch (error) {
      console.error("Error deleting comment:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex items-center justify-between py-2 border-b last:border-none">
      <p className="text-sm text-gray-700">
        <span className="font-bold">Anonymous: </span>
        {data.text}
      </p>
      <Button
        onClick={() => handleDeleteComment(data.timestamp)}
        className="ml-2 bg-red-500 hover:bg-red-600"
        disabled={isDeleting}
      >
        X
      </Button>
    </div>
  );
}
