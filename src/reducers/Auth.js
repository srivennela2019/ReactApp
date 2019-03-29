const initalAppState = {
  isLoggedIn: localStorage.getItem("isLoggedIn")
};
const reducer = (state = initalAppState, action) => {
  return state;
};
export default authReducer;
