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
      <div className="container p-5 flex flex-col justify-start bg-black text-white hover:bg-primio dark:bg-slate-300 dark:hover:bg-slate-600 rounded h-full cursor-text">
        <FontAwesomeIcon icon={icon} size="2xl" className="text-white dark:text-black" />
        <span className="text-2xl block my-2 text-white dark:text-black">{title}</span>
        <span className="text-sm hover:text-md text-white dark:text-black">{description}</span>
      </div>
    </>
  )
}
