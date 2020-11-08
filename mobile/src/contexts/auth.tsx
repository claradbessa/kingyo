import React, { createContext, useState, useEffect, useContext } from 'react';
import { AxiosResponse } from "axios";
import api from '../services/api';
import { AsyncStorage } from 'react-native';

interface User{
    email: string
    type: number
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(
        email: string,
        password: string
    ): Promise<AxiosResponse>;
    signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStoregedData() {
          const storegedUser = await AsyncStorage.getItem("@Auth:user");
          const storegedToken = await AsyncStorage.getItem("@Auth:token");

          await new Promise((resolve) => setTimeout(resolve, 1000));
    
          if (storegedUser) {
            api.defaults.headers['Authorization'] = `Bearer ${storegedToken}`
            setUser(JSON.parse(storegedUser));
            setLoading(false);
          } 
        }
    
        loadStoregedData();
      }, []);

    async function signIn(email: string, password: string) {
        const response = await api.post("/authenticate", {
            email,
            password,
        });

        if (response.data.user) {
            api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;
            await AsyncStorage.setItem("@Auth:user", JSON.stringify(response.data.user));
            await AsyncStorage.setItem("@Auth:token", JSON.stringify(response.data.token));
            setUser(response.data.user);
        }

        return response;
    }

    async function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });   
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
};

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}


