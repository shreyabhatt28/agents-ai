"use client";

import AgentList from "@/components/AgentList";
import CreateAgent from "@/components/CreateAgent";
import { useAgent } from "@/context/AgentContext";
import { Circles } from "react-loader-spinner";


export default function Home() {
  const {loading,error} = useAgent();

  if (loading) return <div className="flex items-center justify-center h-screen">
  <Circles
  height="80"
  width="80"
  color="#3730A3"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col">
      <div className="bg-indigo-800 w-full p-2">
      <h1 className="text-md font-semibold ml-4 text-white">Choose from an agent</h1>
      </div>
      <CreateAgent/>
      <AgentList/>
    </div>
  );
}
