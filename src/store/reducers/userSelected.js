export default function userSelected(user = {}, action) {
  switch (action.type) {
    case "SELECT_USER":
      return {...action.user};
    default:
      return user;
  }
}