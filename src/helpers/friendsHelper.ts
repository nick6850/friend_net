import { FriendType } from "../types/types";

export function deleteFriend(
  friendId: string,
  friendsList: FriendType[],
  setFriendsList: React.Dispatch<React.SetStateAction<FriendType[]>>
) {
  const updatedFriendsList = friendsList.filter(
    (friend) => friend.login.uuid !== friendId
  );
  setFriendsList(updatedFriendsList);
}
