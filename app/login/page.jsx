import React from "react";
import LoginForm from "../ui/login/loginForm/loginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-4">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
