import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function Voice(){
    return (
    <div className="flex flex-col justify-center p-2">
        <h1 className="font-semibold text-md mb-2">Select Voice</h1>

        <div className="relative w-full max-w-sm h-[30px]">
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-500 " />
            </span>
            <Input
            type="text"
            placeholder="Search..."
            className="pl-10 h-full focus-visible:ring-gray-400 border-none"
            />
        </div>
        <div className="h-[200px] w-full mt-3 flex flex-col gap-2">
            <div className="flex items-center p-2 justify-between bg-indigo-200 rounded-md">
                <h1>Maria</h1>
                <div className="flex items-center justify-center text-[10px] text-white rounded-full h-[20px] w-[40px] bg-indigo-700">Female</div>
            </div>

            <div className="flex items-center p-2 justify-between bg-indigo-200 rounded-md">
                <h1>Sarah</h1>
                <div className="flex items-center justify-center text-[10px] text-white rounded-full h-[20px] w-[40px] bg-indigo-700">Female</div>
            </div>

            <div className="flex items-center p-2 justify-between bg-indigo-200 rounded-md">
                <h1>Mark</h1>
                <div className="flex items-center justify-center text-[10px] text-white rounded-full h-[20px] w-[40px] bg-indigo-700">Male</div>
            </div>

            <div className="flex items-center p-2 justify-between bg-indigo-200 rounded-md">
                <h1>Sam</h1>
                <div className="flex items-center justify-center text-[10px] text-white rounded-full h-[20px] w-[40px] bg-indigo-700">Male</div>
            </div>
        </div>
    </div>
    )
}