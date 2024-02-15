import { useState, useEffect } from "react";
import { Friend } from "../../types/types";
import style from "./Home.module.scss";
import Button from "../../components/Button/Button";
import FriendsList from "../../components/FriendsList/FriendsList";

const Homepage = () => {
  return <FriendsList />;
};
export default Homepage;
