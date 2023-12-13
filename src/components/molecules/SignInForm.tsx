import React, { ChangeEvent } from "react";

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
          <label htmlFor="name" className="text-black">
            E-mail:
          </label>
          <input type="email" className="border rounded p-2 text-black" value={email} onChange={onEmailChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-black">
            Hasło:
          </label>
          <input type="password" className="border rounded p-2 text-black" value={password} onChange={onPasswordChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="username" className="text-black">
            Nazwa użytkownika:
          </label>
          <input type="text" className="border rounded p-2 text-black" value={username} onChange={onUsernameChange} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-black">
            Imię i nazwisko:
          </label>
          <input type="text" className="border rounded p-2 text-black" value={fullName} onChange={onNameChange} />
        </div>
        <div className="flex items-center justify-center">
          <button type="button" className="w-5/6 bg-orange-500 text-white py-2 px-4 mt-4 rounded hover:bg-orange-600 transition-all" onClick={onSignIn}>
            Zarejestruj się
          </button>
        </div>
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
