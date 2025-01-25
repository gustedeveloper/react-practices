import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/list");
  };

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={handleNavigation}>Login</button>
    </>
  );
};
