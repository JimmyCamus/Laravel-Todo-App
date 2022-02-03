const isLoggedin = (user) => {
  if (!user.name) return false;
  return true;
};

export default isLoggedin;
