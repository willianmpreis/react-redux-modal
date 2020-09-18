export const addUser = user => ({
    type: "ADD_USER",
    user: { ...user }
});

export const setUser = user => ({
  type: "SET_USER",
  user: { ...user }
});

export const selectUser = user => ({
  type: "SELECT_USER",
  user: { ...user }
});
