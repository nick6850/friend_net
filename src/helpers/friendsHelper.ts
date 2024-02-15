import { Friend } from "../types/types";

export function deleteFriend(
  friendId: string,
  friendsList: Friend[],
  setFriendsList: React.Dispatch<React.SetStateAction<Friend[]>>
) {
  const updatedFriendsList = friendsList.filter(
    (friend) => friend.login.uuid !== friendId
  );
  setFriendsList(updatedFriendsList);
}
