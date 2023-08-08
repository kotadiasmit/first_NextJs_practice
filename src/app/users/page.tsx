import React from "react";
import AddUser from "./AddUser";

interface Data {
  id: number;
  name: string;
  email: string;
  age: number;
}

const Users: React.FC = async () => {
  let response = await fetch("http://localhost:3000/api/usersData");
  let data: Data[] = await response.json();
  console.log(data);
  return (
    <div className="mt-8 flex flex-col items-center">
      {data.map((user) => (
        <div key={user.id} className="flex">
          <p className="w-20">{user.name}</p>
          <p className="w-40">{user.email}</p>
          <p>{user.age}</p>
        </div>
      ))}
      <AddUser />
    </div>
  );
};

export default Users;
