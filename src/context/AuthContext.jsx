import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('cinescope_demo_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const login = (email, password, rememberMe = true) => {
    const name = email.split('@')[0].replace(/[._]/g, ' ');
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    const mockUser = {
      id: 'demo-user-101',
      email,
      name: formattedName || 'CineScope Critic',
      isDemo: true,
      avatar: '🎬'
    };
    setUser(mockUser);
    if (rememberMe) {
      localStorage.setItem('cinescope_demo_user', JSON.stringify(mockUser));
    }
    return mockUser;
  };

  const signup = (fullName, email, password) => {
    const mockUser = {
      id: `demo-user-${Date.now()}`,
      email,
      name: fullName,
      isDemo: true,
      avatar: '🍿'
    };
    setUser(mockUser);
    localStorage.setItem('cinescope_demo_user', JSON.stringify(mockUser));
    return mockUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('cinescope_demo_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
