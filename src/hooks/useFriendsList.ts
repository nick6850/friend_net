import { useEffect, useState } from "react";
import { FriendType } from "../types/types";

export default function useFriendsList() {
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

  return { friendsList, isLoading, setFriendsList } as const;
}
