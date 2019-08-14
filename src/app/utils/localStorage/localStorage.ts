import { IUser } from "./types";

export const getAuthentication = (user: string) => {
  const isLogged = JSON.parse(localStorage.getItem(user));
  return isLogged ? isLogged : null;
};

export const setAuthentication = (value: IUser) =>
  localStorage.setItem(value.login, JSON.stringify(value));

export const deleteSession = (user: string) => {
  localStorage.removeItem(user);
};
