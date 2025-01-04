import { useNavigate, useParams } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [quizzes, setQuizzes] = useState([]);
    useEffect(() => {
        axios.get(`https://api.eduquiz.space/api/quizzes?userId=${id}`)
            .then(response => {
                console.log(response.data);
                setQuizzes(response.data);
            })
            .catch(error => {
                console.error('Error fetching quizzes:', error);
            });
    }, [id]);

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
                            {quizzes.map((quiz: any) => (
                                <TableRow>
                                    <TableCell className="font-medium">{quiz.title}</TableCell>
                                    <TableCell>{quiz.description}</TableCell>
                                    <TableCell>{quiz.duration}</TableCell>
                                    <TableCell className="text-center w-[200px]">{quiz.winnerCount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </div>
            </div>
        </div>
    </div>;
}