import { Button } from "./ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState} from "react";
import { useRouter} from "next/navigation";
import { useAgent } from "@/context/AgentContext";

const AgentList = () => {

  const { agentData, setSelectedAgent } = useAgent();
  const rowsPerPage = 6;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);
  const router = useRouter();

  const handleSelect = (agentId) => {
    const agent = agentData.find((item) => item.agent_id === agentId); 
    setSelectedAgent(agent);

    router.push(`/agent-features/${agentId}`);
  };

  return (
    <div className="p-4">
      <Table className="mb-10">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Voice</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {agentData.slice(startIndex, endIndex).map((item) => (
            <TableRow key={item.agent_id}>
              <TableCell>{item.agent_name}</TableCell>
              <TableCell>{item.voice_id.slice(7)}</TableCell>
              <TableCell className="text-right">
                <Button onClick={() => handleSelect(item.agent_id)}>
                  Select
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={
                startIndex === 0
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
              onClick={() => {
                setStartIndex(startIndex - rowsPerPage);
                setEndIndex(endIndex - rowsPerPage);
              }}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              className={
                endIndex >= agentData.length
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
              onClick={() => {
                setStartIndex(startIndex + rowsPerPage);
                setEndIndex(endIndex + rowsPerPage);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default AgentList;
