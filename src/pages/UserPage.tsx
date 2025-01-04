import { useNavigate, useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import axios from "axios";
import { Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

  const handleCopyQuizLink = async (slug: string) => {
    await navigator.clipboard.writeText("localhost:5173/quiz/" + slug);
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

  console.log(quizzes);

  return (
    <div className="">
      <div className="border-b border-gray-200">
        <div className="flex items-center p-2">
          <img
            onClick={() => navigate("/")}
            src="/assets/images/logos/eduquiz-white.png"
            alt="Eduquiz"
            className="h-12 w-auto"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-4 text-white w-full h-full ">
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
                    <TableCell className="font-medium">{quiz.title}</TableCell>
                    <TableCell>{quiz.description}</TableCell>
                    <TableCell>{quiz.duration}</TableCell>
                    <TableCell className="text-center w-[200px]">
                      {quiz.winnerCount}
                    </TableCell>
                    <TableCell className="text-right">
                      <button
                        className="text-blue-500"
                        onClick={() => handleCopyQuizLink(quiz.slug)}
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
      </div>
    </div>
  );
}
