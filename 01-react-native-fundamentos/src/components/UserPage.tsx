import axios from "axios";
import { useEffect, useState } from "react";
import type { ReqResUserListResponse, User } from "../interfaces";

const loadUsers = async (): Promise<User[]> => {
  try {
    const { data } = await axios.get<ReqResUserListResponse>(
      "https://reqres.in/api/users"
    );
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const UserPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUsers().then(setUsers);
  }, []);

  return (
    <>
      <h3> Usuarios: </h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </>
  );
};

interface Props {
  user: User;
}

export const UserRow = ({ user }: Props) => {
  const { avatar, first_name, last_name, email } = user;
  return (
    <tr>
      <td>
        <img src={avatar} alt="imagen del avatar" />
      </td>
      <td>{last_name}</td>
      <td>{email}</td>
    </tr>
  );
};
