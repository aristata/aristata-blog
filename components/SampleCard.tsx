import { Sample } from "contentlayer/generated"
import { format, parseISO } from "date-fns"
import Link from "next/link"

const SampleCard = (sample: Sample) => {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={sample.slug}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {sample.title}
        </Link>
      </h2>
      <time
        dateTime={sample.createdAt}
        className="block mb-2 text-xs text-gray-600"
      >
        {format(parseISO(sample.createdAt), "yyyy 년 MM 월 dd 일")}
      </time>
    </div>
  )
}

export default SampleCard
