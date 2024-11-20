import React, { useState, useEffect } from 'react';
import { useAgent } from "@/context/AgentContext";

export function Header() {
  const { selectedAgent, updateAgentName } = useAgent(); 
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(selectedAgent?.agent_name || '');

  useEffect(() => {
    if (selectedAgent) {
      setNewName(selectedAgent.agent_name);
    }
  }, [selectedAgent]);


  const handleTitleClick = () => {
    setIsEditing(true);
  };


  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  const handleBlur = () => {
    if (newName && newName !== selectedAgent?.agent_name) {
      updateAgentName(newName);
    }
    setIsEditing(false);
  };

  return (
    <header className="bg-indigo-800 z-50 h-[70px] text-white p-4 shadow-md fixed top-0 left-0 right-0 flex justify-center items-center">
      <h1
        className="text-2xl font-semibold cursor-pointer"
        onClick={handleTitleClick}
      >
        {isEditing ? (
          <input
            type="text"
            value={newName}
            onChange={handleInputChange}
            onBlur={handleBlur}
            autoFocus
            className="bg-indigo-800 text-white border-b border-white outline-none"
          />
        ) : (
          newName
        )}
      </h1>
    </header>
  );
}
