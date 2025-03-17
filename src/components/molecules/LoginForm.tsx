import React, { ChangeEvent } from "react";
import ColoredButton from "../atoms/commons/ColoredButton";

interface LoginFormProps {
  onLogin: () => void;
  username: string;
  onUsernameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  password: string;
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm = ({ onLogin, username, onUsernameChange, password, onPasswordChange }: LoginFormProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96 mt-2 z-50">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">Zaloguj się</h1>
      <form className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="username" className="text-black">
            Nazwa użytkownika:
          </label>
          <input type="text" id="username" className="border rounded p-2 text-black" value={username} onChange={onUsernameChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-black">
            Hasło:
          </label>
          <input type="password" id="password" className="border rounded p-2 text-black" value={password} onChange={onPasswordChange} />
        </div>
        <ColoredButton content="Zaloguj się" onClick={onLogin} backgroundOption="orange" />
        <div className="flex flex-col items-center justify-center">
          <button className="w-fit text-orange-500 text-[0.75rem] hover:underline transition-all">
            <a href="/signin">Utwórz konto</a>
          </button>
        </div>
        <hr/>
        <div className="flex flex-col items-center justify-center">
          <button className="w-fit text-orange-500 text-[0.75rem] hover:underline transition-all">
            <a href="/home">Kontynuuj bez logowania</a>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
