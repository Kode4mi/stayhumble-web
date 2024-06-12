"use client"
import React, {createContext, useContext, useEffect, useState} from 'react';
import {UserModel} from "@/models/user.model";

interface UserContextProps {
    user: UserModel | null;
    login: (userData: UserModel) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextProps>({user: null, login: ()=>{}, logout: ()=>{}});

export const UserProvider = ({ children }: {children: React.ReactNode}) => {
    const [user, setUser] = useState<UserModel | null>(null);

    useEffect(() => {
        // Odczytaj dane użytkownika z localStorage podczas inicjalizacji
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData: UserModel) => {
        setUser(userData);
        sessionStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem('user');
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};


export const useUser = () => {
    return useContext(UserContext);
};