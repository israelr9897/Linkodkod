import type { UserType } from "../useContext/userContext";

const URL = "http://localhost:3005/auth";

export async function addUserAPi(user: UserType) {
  const response = await fetch(URL + "/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "",
    },
    body: JSON.stringify(user),
  });
  if (response.status === 406) return false;

  //   const data = await response.json();
  return true;
}
export async function signInUserAPi(user: UserType) {
  const response = await fetch(URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (response.status === 403) return false;
  const data = await response.json();
  //   document.cookie = "authToken" + "=" + data.cookie
  return data.user;
}
