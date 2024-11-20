import { Calendar, AudioLines, Hash, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Voice",
    icon: AudioLines,
  },
  {
    title: "Settings",
    icon: Settings,
  },
  {
    title: "Calendar",
    icon: Calendar,
  },
  {
    title: "Hash",
    icon: Hash,
  }
]

export function AppSidebar({handleSelect, selectedOption}) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="pt-20">
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} onClick = {() => handleSelect(item.title)} >
                  <SidebarMenuButton asChild className={`flex items-center justify-center hover:text-indigo-800 cursor-pointer ${
                        selectedOption === item.title ? "text-indigo-800" : ""
                      }`} >
                    <a className="flex items-center justify-center">
                      <item.icon strokeWidth={3}/>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
