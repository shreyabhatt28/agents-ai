'use client'

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import {ContentSidebar} from "@/components/ContentSidebar"
import { Header } from "@/components/Header";
import { useAgent } from "@/context/AgentContext";
import { useState } from "react";


export default function AgentsFeaturesLayout({ children }) {
  
  const {selectedAgent} = useAgent();
  const [selectedOption, setSelectedOption] = useState("Voice");

  const handleSelect = (option) => {
    setSelectedOption(option);
  }

  return (
    <div className="h-screen flex flex-col">
      <SidebarProvider>
        <Header
          title={selectedAgent?.agent_name}/>
        <main className="flex-1 grid md:grid-cols-[6rem_1fr] grid-cols-1 pt-16">
          <AppSidebar selectedOption={selectedOption} handleSelect={handleSelect}/>
          <div className="flex w-full h-full overflow-y-auto">
          <ContentSidebar selectedOption={selectedOption}/>
            {children}
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
