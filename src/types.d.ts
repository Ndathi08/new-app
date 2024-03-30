type PeopleProps = {
    people: string;
  }

  type AuthContextType = {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
  };

  type AuthProviderProps = {
    children: ReactNode;
  };