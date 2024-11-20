"use client"

import { createContext, useContext, useState, useEffect } from "react";

const AgentContext = createContext();

export const useAgent = () => {
    return useContext(AgentContext);
}

export const AgentProvider = ({children}) => {

  const [agentData,setAgentData] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(() => {
    const savedAgent = localStorage.getItem('selectedAgent');
    return savedAgent ? JSON.parse(savedAgent) : null;
  });

  const updateAgentName = (updatedName) => {
    if (selectedAgent) {
      const updatedAgent = { ...selectedAgent, agent_name: updatedName };
      setSelectedAgent(updatedAgent);

      
      localStorage.setItem('selectedAgent', JSON.stringify(updatedAgent));

      
      setAgentData((prevAgentData) =>
        prevAgentData.map((agent) =>
          agent.agent_id === selectedAgent.agent_id ? updatedAgent : agent
        )
      );
    }
  };


  useEffect(()=>{
    const fetchAgents = async () => {
      try{
        const res = await fetch('/api/retell');
        const data = await res.json();
        console.log(data);
        setAgentData(data);
      }catch(err){
        setError('Failed to load agents');
      }finally{
        setLoading(false);
      }
    };
    fetchAgents();
  },
  []);

  return (
    <AgentContext.Provider
    value={{
        agentData,
        loading,
        error,
        selectedAgent,
        setSelectedAgent,
        updateAgentName,
    }}
    >
        {children}
    </AgentContext.Provider>
  )
}



