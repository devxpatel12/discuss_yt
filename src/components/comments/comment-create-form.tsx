"use client";
import React, { useActionState, useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { createComment } from "@/actions/create-comment";
import { Loader2 } from "lucide-react";

type CommentCreateFormProps = {
  postId: string;
  parentId?: string;
  startOpen?: boolean;
};

const CommentCreateForm: React.FC<CommentCreateFormProps> = ({
  postId,
  parentId,
  startOpen,
}) => {
  const [open, setOpen] = useState(startOpen);
  const [formState, action, isPending] = useActionState(
    createComment.bind(null, { postId, parentId }),
    { errors: {} }
  );

  return (
    <div>
      <Button size={"sm"} variant={"link"} onClick={() => setOpen(!open)}>
        Reply
      </Button>
      {open && (
        <form action={action} className="space-y-2">
          <Textarea
            name="content"
            placeholder="write a comment..."
            className="bg-gray-100 focus-visible:ring-0"
          />
          {formState.errors.content && (
            <p className="text-red-600 text-sm">{formState.errors.content}</p>
          )}
          {formState.errors.formError && (
            <div className="bg-red-200 border border-red-600 text-sm p-2 rounded">
              {formState.errors.formError}
            </div>
          )}
          <Button disabled={isPending} size={"sm"} variant={"secondary"}>
            {isPending ? (
              <>
                <Loader2 />
                Please wait
              </>
            ) : (
              "Save"
            )}
          </Button>
        </form>
      )}
    </div>
  );
};

export default CommentCreateForm;
