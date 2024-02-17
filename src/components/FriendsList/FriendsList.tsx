import style from "./FriendsList.module.scss";
import Button from "../Button/Button";
import { deleteFriend } from "../../helpers/friendsHelper";
import { Link } from "react-router-dom";
import useFriendsList from "../../hooks/useFriendsList";

export default function FriendsList() {
  const { friendsList, setFriendsList, isLoading } = useFriendsList();

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
              onClick={() =>
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
