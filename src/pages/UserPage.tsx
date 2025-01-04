import { useNavigate } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function UserPage() {
    const navigate = useNavigate();
    return <div className="">
        <div className="border-b border-gray-200">
            <div className="flex items-center p-2">
                <img
                    onClick={() => navigate('/')}
                    src="/assets/images/logos/eduquiz-white.png"
                    alt="Eduquiz"
                    className="h-12 w-auto"
                />
            </div>
        </div>
        <div className="flex flex-col justify-center items-center p-4 text-white w-full h-full ">
            <div className="border border-gray-200 p-2 rounded-lg">
                <div className=" p-2 ">
                    <p className="text-2xl font-bold text-left text-white p-2" >Your Quizzes</p>
                    <p className="text-sm text-left text-white ml-2" >Here you can find a list of all the quizzes you’ve created. Feel free to copy the link to share it with your audience.</p>
                </div>
                <div className="flex justify-center items-center p-4 text-white ">

                    <Table className="justify-center items-center ">
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Title</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Duration</TableHead>
                                <TableHead className="text-right">Number of Winners</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">Test1</TableCell>
                                <TableCell>This is a test quiz</TableCell>
                                <TableCell>30 minutes</TableCell>
                                <TableCell className="text-center w-[200px]">2</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                </div>
            </div>
        </div>
    </div>;
}