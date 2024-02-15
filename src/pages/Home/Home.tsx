import style from "./Home.module.scss";

import FriendsList from "../../components/FriendsList/FriendsList";
import { Navigate, useOutletContext } from "react-router";
import { AuthState } from "../../types/types";

const Home = () => {
  const { isLoggedIn } = useOutletContext<AuthState>();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <FriendsList />;
};

export default Home;
