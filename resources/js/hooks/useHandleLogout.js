export const useHandleLogout = () => handleLogout;

const handleLogout = async (setUser) => {
  const response = await fetch("/api/logout");
  const data = await response.json();
  setUser(data.user);
};
