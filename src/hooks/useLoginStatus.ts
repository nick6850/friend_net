import { useState } from "react";

function useLoginStatus() {
  const storedName = localStorage.getItem("userName");
  const parsedName = storedName ? JSON.parse(storedName) : "";

  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(parsedName) || false);
  const [userName, setUserName] = useState(parsedName);

  function toggleIsLoggedIn(_isLoggedIn: boolean, name?: string) {
    if (_isLoggedIn) {
      if (!name) {
        throw new Error("Name is not provided");
      }
      setUserName(name);
      setIsLoggedIn(true);
      localStorage.setItem("userName", JSON.stringify(name));
    } else {
      setIsLoggedIn(false);
      setUserName("");
      localStorage.removeItem("userName");
      localStorage.removeItem("friendsList");
    }
  }

  return { isLoggedIn, toggleIsLoggedIn, userName } as const;
}

export default useLoginStatus;
