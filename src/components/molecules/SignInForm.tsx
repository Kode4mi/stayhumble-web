import React, { ChangeEvent } from "react";
import ColoredButton from "../atoms/commons/ColoredButton";

interface SignInFormProps {
  onSignIn: () => void;
  email: string;
  fullName: string;
  username: string;
  password: string;
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onUsernameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onSignIn, email, fullName, username, password, onEmailChange, onNameChange, onUsernameChange, onPasswordChange }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96 mt-2">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">Zarejestruj się</h1>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-black">
            E-mail:
          </label>
          <input type="email" id="email" className="border rounded p-2 text-black" value={email} onChange={onEmailChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-black">
            Hasło:
          </label>
          <input type="password" id="password" className="border rounded p-2 text-black" value={password} onChange={onPasswordChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="username" className="text-black">
            Nazwa użytkownika:
          </label>
          <input type="text" id="username" className="border rounded p-2 text-black" value={username} onChange={onUsernameChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-black">
            Imię i nazwisko:
          </label>
          <input type="text" id="name" className="border rounded p-2 text-black mb-4" value={fullName} onChange={onNameChange} />
        </div>
          <ColoredButton content="Zarejestruj się" onClick={onSignIn} backgroundOption="orange" />
        <div className="flex flex-col items-center justify-center">
          <hr className="h-2 w-full text-orange-500" />
          <p className="text-black mt-2">Masz już konto?</p>
        <button className="w-fit mt-2 text-orange-500 text-[0.75rem] hover:underline transition-all"><a href="/login">Zaloguj się</a></button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
