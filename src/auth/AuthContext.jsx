import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const USER_KEY = "yatra_ai_user";
const AUTH_KEY = "yatra_ai_auth";

const DEMO_USER = {
  id: "demo-user",
  name: "Arjun Kumar",
  email: "demo@yatraai.com",
  role: "Traveler",
  budget: "Moderate",
  transport: "Mixed",
  travelStyle: "Balanced",
  isDemo: true,
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedAuth = localStorage.getItem(AUTH_KEY);
    const savedUser = localStorage.getItem(USER_KEY);

    if (savedAuth === "true" && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem(USER_KEY);
        localStorage.removeItem(AUTH_KEY);
      }
    }

    setLoading(false);
  }, []);

  const saveUser = (userData, remember = true) => {
    setUser(userData);

    if (remember) {
      localStorage.setItem(USER_KEY, JSON.stringify(userData));
      localStorage.setItem(AUTH_KEY, "true");
    } else {
      sessionStorage.setItem(USER_KEY, JSON.stringify(userData));
      sessionStorage.setItem(AUTH_KEY, "true");
    }
  };

  const login = async (email, password, remember = true) => {
    await new Promise((resolve) => setTimeout(resolve, 700));

    const storedUser = localStorage.getItem(`yatra_user_${email}`);

    if (storedUser) {
      const parsed = JSON.parse(storedUser);

      if (parsed.password !== password) {
        throw new Error("Incorrect password.");
      }

      saveUser(parsed.user, remember);
      return parsed.user;
    }

    if (email === "demo@yatraai.com" && password === "demo1234") {
      saveUser(DEMO_USER, remember);
      return DEMO_USER;
    }

    throw new Error(
      "Account not found. Use Demo Mode or create a new account."
    );
  };

  const signup = async ({
    name,
    email,
    password,
    travelStyle,
  }) => {
    await new Promise((resolve) => setTimeout(resolve, 700));

    const user = {
      id: Date.now().toString(),
      name,
      email,
      role: "Traveler",
      budget: "Moderate",
      transport: "Mixed",
      travelStyle: travelStyle || "Balanced",
      isDemo: false,
    };

    localStorage.setItem(
      `yatra_user_${email}`,
      JSON.stringify({
        user,
        password,
      })
    );

    saveUser(user, true);

    return user;
  };

  const demoLogin = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    saveUser(DEMO_USER, true);
    return DEMO_USER;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(AUTH_KEY);
    sessionStorage.removeItem(USER_KEY);
    sessionStorage.removeItem(AUTH_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        signup,
        demoLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
