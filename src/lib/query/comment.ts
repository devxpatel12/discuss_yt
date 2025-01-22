import { cache } from "react";
import { prisma } from ".."
import type { Comment } from "@prisma/client"

export type CommentWithAuthor = Comment & {
    user: { name: string | null; image: string | null }
}

export const fetchCommentByPostId = cache((postId: string): Promise<CommentWithAuthor[]> => {

    console.log("*******fetch comment by post id is called******");

    return prisma.comment.findMany({
        where: { postId },
        include: {
            user: {
                select: {
                    name: true,
                    image: true
                }
            }
        }
    })
})