import { useMutation, useQuery } from "@tanstack/react-query";
import { quizService } from "../services/quizApi";
import { IQuiz } from "../types";
import { useToast } from "@/hooks/use-toast";

export const useQuiz = () => {
  const { toast } = useToast();

  const quiz = (id: string) =>
    useQuery({
      queryKey: ["quiz", id],
      queryFn: async () => {
        const { data } = await quizService.getById(id);
        return data;
      },
    });

  const createQuiz = useMutation({
    mutationFn: (newQuiz: Omit<IQuiz, "id">) => quizService.create(newQuiz),
    onSuccess: () => {
      // queryClient.invalidateQueries({queryKey: ["quizzes"]});
      toast({
        title: "SUCCESSFULL!",
        description: "Quiz created successfully",
      });
    },

    onError: (error) => {
      toast({
        title: "ERROR!",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return { quiz, createQuiz };
};
