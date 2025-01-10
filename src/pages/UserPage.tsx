import { useNavigate, useParams } from "react-router-dom";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
import { useEffect, useState } from "react";
import axios from "axios";
import { Copy, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// import { CrosswordIcon } from "@/components/icons/crossword";
import { QuestionMark } from "@/components/icons/question-mark";
import { Button } from "@/components/ui/button";
import { Hourglass } from "@/components/icons/hourglass";
import { Trophy } from "@/components/icons/trophy";

interface Quiz {
  id: string;
  title: string;
  description: string;
  created_at: string;
  // Add other quiz properties as needed
}

export default function UserPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { toast } = useToast();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://api.eduquiz.space/api/quizzes?userId=${id}`)
      .then((response) => {
        // Ensure response.data is an array
        const quizData = Array.isArray(response.data) ? response.data : [];
        setQuizzes(quizData);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching quizzes:", error);
        setError("Failed to load quizzes");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  const handleCopyQuizLink = async (quizId: string) => {
    await navigator.clipboard.writeText("eduquiz.space/quiz/" + quizId);
    toast({
      title: "Link copied to clipboard",
      description: "You can now share this link with your audience.",
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(quizzes);

  if (quizzes.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center p-4 text-white w-full h-full ">
        <div className="border border-gray-200 p-2 rounded-lg">
          <div className=" p-2 ">
            <p className="text-2xl font-bold text-left text-white p-2">
              Your Quizzes
            </p>
            <p className="text-sm text-left text-white ml-2">
              You have not created any quizzes yet. Click the button below to
              create your first quiz.
            </p>
          </div>
          <div className="flex justify-center items-center p-4 text-white ">
            <button
              onClick={() => navigate("/create-quiz")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Create Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {quizzes.map((quiz: any) => (
            <div className="flex flex-col justify-between rounded-2xl transition-all min-h-[250px] h-full w-full duration-500 hover:scale-[1.025] hover:transition-all hover:duration-500 border border-gray-200">
              <div>
                <div className="flex justify-between pr-4 items-center">
                  <QuestionMark width={64} height={64} />

                  <Button
                    variant="outline"
                    className=""
                    onClick={() => handleCopyQuizLink("123")}
                  >
                    <Copy size={20} />
                  </Button>
                </div>

                <div className="px-4">
                  <p className="font-semibold leading-5">{quiz.title}</p>
                  <p className="text-xs text-slate-400 mt-2">
                    {quiz.description.substring(0, 200) + "..."}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4">
                <div className="flex items-center mt-4 justify-between bottom-0">
                  <div className="items-center flex space-x-2">
                    <div className="flex items-center">
                      <Hourglass width={32} height={32} />
                      <span className="text-xs">{quiz.duration} min.</span>
                    </div>

                    <div className="flex items-center">
                      <Trophy width={32} height={32} />
                      <span className="text-xs">{quiz.liquidity}</span>
                    </div>
                  </div>
                  <Button className="bg-green-500 ml-auto rounded-full w-10 h-10">
                    <Play size={20} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex flex-col text-black justify-center items-center p-4 w-full h-full ">
        <div className="border border-gray-200 p-2 rounded-lg">
          <div className=" p-2 ">
            <p className="text-2xl font-bold text-left text-white p-2">
              Your Quizzes
            </p>
            <p className="text-sm text-left text-white ml-2">
              Here you can find a list of all the quizzes you’ve created. Feel
              free to copy the link to share it with your audience.
            </p>
          </div>
          <div className="flex justify-center items-center p-4 text-white ">
            <Table className="justify-center items-center ">
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead className="text-right">
                    Number of Winners
                  </TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {quizzes.map((quiz: any) => (
                  <TableRow>
                    <TableCell className="font-medium text-black">
                      {quiz.title}
                    </TableCell>
                    <TableCell>{quiz.description}</TableCell>
                    <TableCell>{quiz.duration}</TableCell>
                    <TableCell className="text-center w-[200px]">
                      {quiz.winnerCount}
                    </TableCell>
                    <TableCell className="text-right">
                      <button
                        className="text-blue-500"
                        onClick={() => handleCopyQuizLink(quiz.id)}
                      >
                        <Share2 />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div> */}
    </div>
  );
}
