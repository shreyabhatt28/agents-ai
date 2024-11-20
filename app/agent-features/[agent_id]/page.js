import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AgentFeatures = () => {
return(
    <div className="bg-slate-100 w-full h-full flex">
        <div className="flex-1 py-10 px-8">
            <h1 className="text-xl font-semibold mb-2">Name</h1>
            <Input type="text" className="w-full mb-4 focus-visible:ring-gray-400 border-none shadow-gray-800"/>
            <h1 className="text-xl font-semibold mb-2">Prompt</h1>
            <textarea
            className="w-full shadow-gray-800 focus-visible:outline-gray-400 h-[500px] p-3 rounded-md resize-none"
            placeholder="Enter your prompt here..."
            />
        </div>
        <div className="h-full gap-4 p-4 sm:flex flex-col w-[350px] hidden border-l">
            <div className=" bg-indigo-400 flex p-2 items-center justify-center rounded-md">
                Test call</div>
            <Input placeholder="Enter name"></Input>
            <Input placeholder="Enter phone number"></Input>
            <Button className="w-[100px]">Call me</Button>
        </div>
    </div>
)
}

export default AgentFeatures;