import style from "./Home.module.scss";

import FriendsList from "../../components/FriendsList/FriendsList";
import { Navigate, useOutletContext } from "react-router";
import { AuthState } from "../../types/types";
import Info from "../../components/Info/Info";

const Home = () => {
  const { isLoggedIn } = useOutletContext<AuthState>();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Info />
      <FriendsList />
    </>
  );
};

export default Home;
