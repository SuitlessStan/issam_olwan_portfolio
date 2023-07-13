import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type CardProps = {
  icon: IconProp
  title: string
  description: string
}

export default function Card({ icon, title, description }: CardProps) {
  return (
    <>
      <div className="container p-5 flex flex-col justify-start bg-slate-800 hover:bg-slate-900 rounded h-full">
        <FontAwesomeIcon icon={icon} size="2xl" />
        <span className="text-2xl block my-2">{title}</span>
        <span className="text-sm">{description}</span>
      </div>
    </>
  )
}
