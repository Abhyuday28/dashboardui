import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface UserItemProps {
  name: string
  role: string
  avatarSrc: string
  isOnline: boolean
}

export function UserItem({ name, role, avatarSrc, isOnline }: UserItemProps) {
  return (
    <div className="flex items-center gap-3 py-1 ">
      <div className="relative">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatarSrc || "/placeholder.svg"} alt={name} />
          <AvatarFallback className="bg-gray-400 text-white">{name.charAt(0)}</AvatarFallback>
        </Avatar>
        {isOnline && <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500" />}
      </div>
      <div className="grid gap-0.5">
        <div className="font-regular text-gray-900 hover:text-black">{name}</div>
        <div className="text-xs text-gray-500">{role}</div>
      </div>
    </div>
  )
}
