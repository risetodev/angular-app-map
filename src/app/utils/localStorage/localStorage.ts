import { IUser } from "./types";

export const getAuthentication = () =>
  !!JSON.parse(localStorage.getItem("user"));

export const setAuthentication = (user: IUser) =>
  localStorage.setItem("user", JSON.stringify(user));

export const deleteSession = () => {
  localStorage.removeItem("user");
};
