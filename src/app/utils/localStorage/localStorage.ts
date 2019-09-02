import { IUser } from "./types";

export const getAuthentication = (): boolean =>
  !!JSON.parse(localStorage.getItem("user"));

export const setAuthentication = (user: IUser): void =>
  localStorage.setItem("user", JSON.stringify(user));

export const deleteSession = (): void => {
  localStorage.removeItem("user");
};
