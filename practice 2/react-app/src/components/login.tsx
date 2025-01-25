import React, { FC } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

interface User {
  username: string;
  password: string;
}

export const LoginPage: FC = () => {
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChangeUser =
    (field: keyof User) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser({ ...user, [field]: e.target.value });
    };

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user.username === "admin" && user.password === "test") {
      navigate("/list");
    } else {
      alert("User / password not valid...");
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleNavigation}>
        <div>
          <input
            placeholder="Username"
            value={user.username}
            onChange={handleChangeUser("username")}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            type="password"
            value={user.password}
            onChange={handleChangeUser("password")}
          />
        </div>
        <button type="submit">Enter</button>
      </form>
    </>
  );
};
