"use client";

import { createContext, useState } from "react";
import { Comment as CommentType } from "@/lib/interface";

export interface Comment {
  imageUrl: string;
  text: string;
  timestamp: bigint;
}

export const CommentsContext = createContext<{
  comments: CommentType[];
  setComments: React.Dispatch<React.SetStateAction<CommentType[]>>;
}>({
  comments: [],
  setComments: () => {},
});
export const CommentsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [comments, setComments] = useState<CommentType[]>([]);

  return (
    <CommentsContext.Provider value={{ comments, setComments }}>
      {children}
    </CommentsContext.Provider>
  );
};
