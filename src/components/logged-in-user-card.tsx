import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ExternalLinkIcon } from "lucide-react"

interface LoggedInUserCardProps {
  name: string
  avatarSrc: string
}

export function LoggedInUserCard({ name, avatarSrc }: LoggedInUserCardProps) {
  return (
    <div className="flex items-center justify-between max-w-xs">
      <div className="flex items-center gap-3 py-1">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatarSrc || "/placeholder.svg"} alt={name} />
          <AvatarFallback className="bg-gray-400 text-white">{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <span className="font-regular text-gray-900 hover:text-black">{name}</span>
      </div>
      <ExternalLinkIcon className="h-4 w-4 text-gray-500 cursor-pointer" />
    </div>
  )
}
