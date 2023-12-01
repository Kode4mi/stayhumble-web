"use client";
import { useState } from "react";
import LoginForm from "../../components/molecules/LoginForm";
import LoginFooter from "@/components/atoms/LoginFooter";

export default function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    console.log("Logowanie:", username, password);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-5xl font-bold mb-2">
          stay<span className="text-orange-500">Humble</span>
        </h1>
        <LoginForm
          onLogin={handleLogin}
          username={username}
          onUsernameChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          password={password}
          onPasswordChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
      </div>
      <LoginFooter />
    </div>
  );
}

//witaj wyrzuc
//pod zaloguj utwórz konto bez ramki pomarańczowy tekst
//form w prawo
//logo na lewo, powiększ i jakieś witaj na stayhumble 
//gwiazdki z tyłu