import { ADD_USER, REMOVE_USER, FETCH_USER } from "../actions/user";
const initalAppState = [
  { user: "user1", location: "loc1" },
  { user: "user2", location: "loc2" },
  { user: "user3", location: "loc3" },
  { user: "user4", location: "loc4" }
];
const reducer = (state = initalAppState, action) => {
  switch (action.type) {
    case "REMOVE_USER":
      return state.filter((item, index) => {
        return index !== action.index;
      });
      break;
    case "ADD_USER":
      return [...state, action.user];
      break;
    case "FETCH_USER":
      return action.users;
      break;
    default:
      return state;
  }
};
export default reducer;
