"use client";

import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { type FC, type JSX, useState } from "react";
import { Button } from "../button";

const BlogCardAction: FC<{ slug: string }> = ({ slug }): JSX.Element => {
  const [redirectLoading, setRedirectLoading] = useState<boolean>(false);

  return (
    <>
      {!redirectLoading && (
        <Link href={`/${slug}`} onClick={() => setRedirectLoading(true)}>
          <Button>Read More</Button>
        </Link>
      )}

      {redirectLoading && (
        <Button variant="ghost" disabled>
          <LoaderCircle className="animate-spin text-neutral-500" size={28} />
        </Button>
      )}
    </>
  );
};

export default BlogCardAction;
