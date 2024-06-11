"use client";
import { useState, useEffect } from "react";
import LoginForm from "../../components/molecules/LoginForm";
import LoginFooter from "@/components/atoms/LoginFooter";
import {UserModel} from "@/models/user.model";
import {useUser} from "@/context/UserContext";
import {useRouter} from "next/navigation";

interface Star {
  top: string;
  left: string;
  animationDuration: string;
}

export default function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [stars, setStars] = useState<Star[]>([]);

  const {login, user} = useUser();
  const router = useRouter();

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

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user]);

  const handleLogin = () => {
    console.log("Logowanie:", username, password);
    const userData: UserModel = {
      id: Math.floor(Math.random() * 10000),
      name: username
    }
    login(userData);
    router.push("/home")
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 relative overflow-hidden dark:bg-black">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute bg-white w-[2px] h-[2px] rounded-[50%] animate-twinkle invisible dark:visible"
          style={{
            top: star.top,
            left: star.left,
            animationDuration: star.animationDuration,
          }}
        ></div>
      ))}
      <div className="flex flex-row items-center justify-center flex-grow text-white">
        <div className="w-0 text-center sm:w-2/3 sm:mr-24">
          <h1 className="text-8xl font-bold mb-2 hidden sm:block">
            <span className="text-black dark:text-white">stay</span>
            <span className="text-orange-500">Humble</span>
          </h1>
          <h4 className="text-4xl px-12 mt-8 font-bold hidden sm:block text-black dark:text-white">Najpokorniejsi ludzie na całym świecie.</h4>
          <h6 className="text-2xl mt-4 hidden sm:block text-black dark:text-white">Dołącz do nas.</h6>
        </div>
        <div className="flex flex-col w-full sm:w-1/2">
          <h1 className="text-5xl text-center font-bold mb-2 block sm:hidden">
            <span className="text-black dark:text-white">stay</span>
            <span className="text-orange-500">Humble</span>
          </h1>
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
