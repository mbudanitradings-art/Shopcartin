import { Link } from 'react-router-dom'

interface Props {
  title: string
  linkTo?: string
  linkLabel?: string
}

export default function SectionHeading({ title, linkTo, linkLabel = 'View all' }: Props) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      {linkTo && (
        <Link to={linkTo} className="shrink-0 text-sm font-semibold underline underline-offset-4 hover:text-silver-600">
          {linkLabel}
        </Link>
      )}
    </div>
  )
}
