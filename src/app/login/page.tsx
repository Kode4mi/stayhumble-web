"use client";
import { useState, useEffect } from "react";
import LoginForm from "../../components/molecules/LoginForm";
import LoginFooter from "@/components/atoms/LoginFooter";

interface Star {
  top: string;
  left: string;
  animationDuration: string;
}

export default function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [stars, setStars] = useState<Star[]>([]);

  const generateStars = () => {
    const newStars: Star[] = [];
    for (let i = 0; i < 200; i++) {
      newStars.push({
        top: Math.random() * 100 + "vh",
        left: Math.random() * 100 + "vw",
        animationDuration: Math.random() * 2 + 1 + "s",
      });
    }
    setStars(newStars);
  };

  useEffect(() => {
    generateStars();
  }, []);

  const handleLogin = () => {
    console.log("Logowanie:", username, password);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute bg-white w-[2px] h-[2px] rounded-[50%] animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            animationDuration: star.animationDuration,
          }}
        ></div>
      ))}
      <div className="flex flex-row items-center justify-center flex-grow text-white">
        <div className="w-2/3 text-center">
          <h1 className="text-8xl font-bold mb-2 ">
            <span className="text-white">stay</span>
            <span className="text-orange-500">Humble</span>
          </h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-6xl font-bold	">Najpokorniejsi ludzie na całym świecie</h1>
          <h2 className="text-3xl mb-8 mt-12">Dołącz do nas.</h2>
            <LoginForm
              onLogin={handleLogin}
              username={username}
              onUsernameChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
              password={password}
              onPasswordChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
        </div>
      </div>
      <LoginFooter />
    </div>
  );
}
