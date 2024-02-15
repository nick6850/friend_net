import React, { useEffect, useState } from "react";
import { Friend } from "../../types/types";
import style from "./FriendsList.module.scss";
import Button from "../Button/Button";
import { deleteFriend } from "../../helpers/friendsHelper";

export default function FriendsList() {
  const storedFriendsList = JSON.parse(
    localStorage.getItem("friendsList") || "[]"
  );
  const [friendsList, setFriendsList] = useState<Friend[]>(storedFriendsList);

  useEffect(() => {
    const fetchFriendsList = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();
        const fetchedFriendsList = data.results;
        localStorage.setItem("friendsList", JSON.stringify(fetchedFriendsList));

        setFriendsList(fetchedFriendsList);
      } catch (error) {
        console.error("Error fetching friends list:", error);
      }
    };

    const storedFriendsList = localStorage.getItem("friendsList");
    if (storedFriendsList) {
      setFriendsList(JSON.parse(storedFriendsList));
    } else {
      fetchFriendsList();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("friendsList", JSON.stringify(friendsList));
  }, [friendsList]);

  if (storedFriendsList.length === 0) {
    return <div>У вас нет друзей :(</div>;
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
            <span className={style.name}>
              {friend.name.first} {friend.name.last}
            </span>

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
