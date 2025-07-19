"use client"

import { useState } from "react"
import { Calendar, MessageSquare, Link, MoreVertical, ArrowUpDown, MapPin, Mail, User } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

interface ContactCardProps {
  title: string
  description: string
  date: string
  comments: number
  links: number
  location?: string
  email?: string
  managerName?: string
  managerAvatar?: string
}

function ContactCard({
  title,
  description,
  date,
  comments,
  links,
  location,
  email,
  managerName,
  managerAvatar,
}: ContactCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Card
      className={cn(
        "w-full cursor-pointer overflow-hidden transition-all duration-300 ease-in-out",
        isExpanded ? "bg-gray-900 text-white" : "bg-card text-card-foreground",
        "hover:shadow-md",
      )}
      onClick={toggleExpand}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">More options</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground">{description}</p>

        {/* Apply transition to this div */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            isExpanded ? "mt-4 max-h-[200px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="space-y-3 text-sm">
            {" "}
            {/* Inner div to maintain spacing */}
            {location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{location}</span>
              </div>
            )}
            {email && (
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{email}</span>
              </div>
            )}
            {managerName && (
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage
                    src={managerAvatar || "/placeholder.svg?height=24&width=24&query=manager avatar"}
                    alt={managerName}
                  />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-xs text-muted-foreground">Manager</div>
                  <div>{managerName}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1 border-2 border-solid rounded-md p-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>{comments}</span>
            </div>
            <div className="flex items-center gap-1">
              <Link className="h-4 w-4" />
              <span>{links}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ContactedCardsList() {
  const cardsData: ContactCardProps[] = [
    {
      title: "ByteBridge",
      description:
        "Corporate and personal data protection on a turnkey basis.",
      date: "18 Apr",
      comments: 2,
      links: 1,
      location: "540 Realty Blvd, Miami, FL 33132",
      email: "contact@primeestate.com",
      managerName: "Antony Cardenas",
      managerAvatar: "/placeholder.svg?height=24&width=24",
    },
    {
      title: "AI Synergy",
      description:
        "Innovative solutions based on artificial intelligence. ",
      date: "21 Mar",
      comments: 1,
      links: 3,
      location: "540 Realty Blvd, Miami, FL 33132",
      email: "contact@primeestate.com",
      managerName: "Antony Cardenas",
      managerAvatar: "/placeholder.svg?height=24&width=24",
    },
    {
      title: "LeadBoost Agency",
      description:
        "Lead attraction and automation for small business",
      date: "No due date",
      comments: 4,
      links: 7,
      location: "540 Realty Blvd, Miami, FL 33132",
      email: "contact@primeestate.com",
      managerName: "Antony Cardenas",
      managerAvatar: "/placeholder.svg?height=24&width=24",
    },
  ]

  return (
    <div className="flex flex-col gap-4 p-1 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-medium">Contacted</h1>
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <span>12</span>
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      </div>
      {cardsData.map((card, index) => (
        <ContactCard key={index} {...card} />
      ))}
    </div>
  )
}
