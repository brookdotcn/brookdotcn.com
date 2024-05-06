import { type HTMLAttributes, forwardRef, type FC } from "react";
import BlogCardAction from "../card-action";
import { Badge } from "./badge";
import { type BlogWithTags } from "@/types";
import { cn } from "@/utils";

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-zinc-500 dark:text-zinc-400", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  ),
);
CardFooter.displayName = "CardFooter";

type BlogCardProps = Omit<BlogWithTags, "id" | "content" | "updatedAt">;

const BlogCard: FC<BlogCardProps> = ({
  createdAt,
  description,
  tags,
  title,
}): JSX.Element => {
  return (
    <Card className="flex min-w-[315px] max-w-[315px] flex-col justify-between">
      <CardHeader>
        <CardTitle className="inline-block overflow-hidden text-ellipsis whitespace-nowrap">
          {title}
        </CardTitle>
        <CardDescription>{createdAt.toLocaleDateString()}</CardDescription>
      </CardHeader>
      <CardContent className="text-zinc-500">{description}</CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex w-1/2 gap-2 overflow-x-auto">
          {tags.map((tag) => (
            <Badge
              key={tag.id}
              className="text-zinc-950 dark:text-white"
              style={{
                backgroundColor: tag.colour,
                border: `2px solid ${tag.colour}`,
              }}
            >
              {tag.name}
            </Badge>
          ))}
        </div>

        <BlogCardAction title={title} />
      </CardFooter>
    </Card>
  );
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};

export default BlogCard;
