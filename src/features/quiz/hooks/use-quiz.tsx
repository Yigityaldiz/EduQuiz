import { useMutation, useQuery } from "@tanstack/react-query";
import { quizService } from "../services/quizApi";
import { IQuiz } from "../types";
import { useToast } from "@/hooks/use-toast";

export const useQuiz = (id: string, userId: string) => {
  const { toast } = useToast();

  const { data, error, isLoading } = useQuery({
    queryKey: ["quiz", id],
    queryFn: async () => {
      const { data } = await quizService.getById(id, userId);
      return data as IQuiz;
    },
  });

  const createQuiz = useMutation({
    mutationFn: (newQuiz: Omit<IQuiz, "id">) => quizService.create(newQuiz),
    onSuccess: () => {
      toast({
        title: "SUCCESSFUL!",
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

  return { quiz: data, error, isLoading, createQuiz };
};
