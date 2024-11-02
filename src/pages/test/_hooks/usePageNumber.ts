import { useParams } from "react-router-dom";

export const usePageNumber = () => {
  const { page } = useParams();
  return { page: page ? Number(page) : 1 };
};
