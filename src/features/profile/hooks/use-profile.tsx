import { useQuery } from "@tanstack/react-query";
import { profileService } from "../services/profileApi";

export const useProfile = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["profileQuizzes"],
    queryFn: async () => {
      const { data } = await profileService.getQuizzes("quest.edu_Ox8e3d");
      return data;
    },
  });

  return { quizzes: data, error, isLoading };
};
