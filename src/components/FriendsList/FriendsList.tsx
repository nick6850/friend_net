import React, { useEffect, useState } from "react";
import { FriendType } from "../../types/types";
import style from "./FriendsList.module.scss";
import Button from "../Button/Button";
import { deleteFriend } from "../../helpers/friendsHelper";
import { Link } from "react-router-dom";

export default function FriendsList() {
  const storedFriendsList = JSON.parse(
    localStorage.getItem("friendsList") || "[]"
  );
  const [friendsList, setFriendsList] =
    useState<FriendType[]>(storedFriendsList);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFriendsList = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();
        const fetchedFriendsList = data.results;
        localStorage.setItem("friendsList", JSON.stringify(fetchedFriendsList));

        setFriendsList(fetchedFriendsList);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching friends list:", error);
      }
    };

    const storedFriendsList = localStorage.getItem("friendsList");
    if (storedFriendsList) {
      setFriendsList(JSON.parse(storedFriendsList));
    } else {
      setIsLoading(true);
      fetchFriendsList();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("friendsList", JSON.stringify(friendsList));
  }, [friendsList]);

  if (isLoading) {
    return (
      <div className={style.loading}>
        Буквально пару секунд, мы сейчас загрузим твоих друзей
      </div>
    );
  }

  if (friendsList.length === 0) {
    return <div className={style.no_friends}>У вас нет друзей :(</div>;
  }

  return (
    <div className={style.friends}>
      <h1>Список ваших друзей:</h1>
      <ul>
        {friendsList.map((friend) => (
          <li key={friend.login.uuid}>
            <img
              src={friend.picture.thumbnail}
              alt={`Profile of ${friend.name.first} ${friend.name.last}`}
            />
            <span className={style.name}>{friend.name.first}</span>
            <Link to={"friend/" + friend.login.username}>Подробнее</Link>
            <Button
              handleClick={() =>
                deleteFriend(friend.login.uuid, friendsList, setFriendsList)
              }
              size="small"
              color="red"
            >
              Удалить
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
