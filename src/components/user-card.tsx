import { Plus } from "lucide-react"
import { UserItem } from "./user-item"

interface User {
  id: string
  name: string
  role: string
  avatarSrc: string
  isOnline: boolean
}

const defaultUsers: User[] = [
  {
    id: "1",
    name: "Sandra Perry",
    role: "Product Manager",
    avatarSrc: "/placeholder.svg?height=48&width=48",
    isOnline: true,
  },
  {
    id: "2",
    name: "Antony Cardenas",
    role: "Sales Manager",
    avatarSrc: "/placeholder.svg?height=48&width=48",
    isOnline: true,
  },
  {
    id: "3",
    name: "Jamal Connolly",
    role: "Growth Marketer",
    avatarSrc: "/placeholder.svg?height=48&width=48",
    isOnline: false,
  },
  {
    id: "4",
    name: "Cara Carr",
    role: "SEO Specialist",
    avatarSrc: "/placeholder.svg?height=48&width=48",
    isOnline: false,
  },
]

export function UserCard({ users = defaultUsers }: { users?: User[] }) {
  return (
    <div className="w-full ">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-400">Members</h2>
        <Plus className="h-5 w-5 text-gray-500 cursor-pointer" />
      </div>
      <div className="space-y-1 cursor-pointer">
        {users.map((user) => (
          <UserItem
            key={user.id}
            name={user.name}
            role={user.role}
            avatarSrc={user.avatarSrc}
            isOnline={user.isOnline}
          />
        ))}
      </div>
    </div>
  )
}
