import { Post } from "contentlayer/generated"
import { format, parseISO } from "date-fns"
import Link from "next/link"

const PostCard = (post: Post) => {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.slug}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time
        dateTime={post.createdAt}
        className="block mb-2 text-xs text-gray-600"
      >
        {format(parseISO(post.createdAt), "yyyy 년 MM 월 dd 일")}
      </time>
    </div>
  )
}

export default PostCard
