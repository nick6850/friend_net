import style from "./Home.module.scss";

import FriendsList from "../../components/FriendsList/FriendsList";
import { Navigate, useOutletContext } from "react-router";

const Home = () => {
  const [isLoggedIn, toggleIsLoggedIn] =
    useOutletContext<[boolean, () => void]>();

  console.log(isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <FriendsList />;
};

export default Home;
