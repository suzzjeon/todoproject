import { useDispatch } from "react-redux";

const usePost = () => {
  const dispatch = useDispatch();

  const postHandler = (action, arg) => {
    dispatch(action(arg));
  };

  return postHandler;
};

export default usePost;
