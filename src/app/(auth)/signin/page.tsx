"use client";
import { useState, useEffect } from "react";
import SignInForm from "../../../components/molecules/SignInForm";
import LoginFooter from "@/components/atoms/LoginFooter";
import { BeautifierService } from "@/services/beautifier.service";
import { Star } from "@/models/star.model";
import ThemeSwitch from "@/components/atoms/ThemeSwitch";

export default function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [stars, setStars] = useState<Star[]>([]);

  const beautifierService = new BeautifierService();

  useEffect(() => {
    beautifierService.generateStars(setStars);
  }, []);

  const handleSignIn = () => {
    console.log("Rejestracja:", email, password, username, fullName);
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
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="h-screen fixed right-0 top-0 bottom-0 web:block hidden">
          <div className="flex justify-end p-4 mr-8 text-black dark:text-white">
            <ThemeSwitch />
          </div>
        </div>
        <h1 className="text-5xl text-center font-bold mb-2 hover:text-[3.1rem] transition-all">
          <a href="/login">
            <span className="text-black dark:text-white">stay</span>
            <span className="text-orange-500">Humble</span>
          </a>
        </h1>
        <SignInForm
          onSignIn={handleSignIn}
          email={email}
          onEmailChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          fullName={fullName}
          onNameChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
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
