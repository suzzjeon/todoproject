import { useParams } from "react-router-dom";

export const Sample = () => {
  const { id } = useParams();

  return <div>상세페이지</div>;
};
