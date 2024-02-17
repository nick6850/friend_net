import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FriendType } from "../../types/types";
import style from "./Friend.module.scss";
import { Link } from "react-router-dom";

function Friend() {
  const { username } = useParams();
  const [friend, setFriend] = useState<FriendType>();

  useEffect(() => {
    const currentFriends = localStorage.getItem("friendsList");
    if (currentFriends) {
      const friendsList = JSON.parse(currentFriends);
      const friend = friendsList.find((friend: FriendType) => {
        console.log(friend.id.value);
        return friend.login.username === username;
      });
      setFriend(friend);
    }
  }, []);

  if (!friend) {
    return (
      <div className={style["no-friend"]}>
        <span className={style["warning"]}>Запрошенный друг не найден :(</span>
        <br />
        <span>
          <Link to="/">Вернуться назад</Link>
        </span>
      </div>
    );
  }

  return (
    <div className={style["container"]}>
      <img
        className={style["friend-image"]}
        src={friend.picture.large}
        alt="Friend"
      />
      <h2 className={style["friend-name"]}>
        {friend.name.first} {friend.name.last}
      </h2>
      <div className={style["friend-info"]}>
        <span>
          <span className={style["friend-info-label"]}>Email:</span>
          {friend.email}
        </span>
        <span>
          <span className={style["friend-info-label"]}>Phone:</span>
          {friend.phone}
        </span>
        <span>
          <span className={style["friend-info-label"]}>Location: </span>
          {friend.location.city}, {friend.location.country}
        </span>
      </div>

      <Link to="/">Вернуться назад</Link>
    </div>
  );
}

export default Friend;
