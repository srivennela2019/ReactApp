export const REMOVE_USER = "REMOVE_USER";
export const ADD_USER = "ADD_USER";
export const FETCH_USER = "FETCH_USER";
export const remove_user = index => {
  return {
    type: REMOVE_USER,
    index
  };
};
export const add_user = user => {
  return {
    type: ADD_USER,
    user
  };
};
// export const fetch_user = () => {
//   return dispatch => {
//   fetch("http://localhost:4000/getusers")
//     .then(data => data.json())
//     .then(data => {
//       dispatch({
//         type: FETCH_USER,
//         users: data
//       });
//      // console.log(data);
//     });
//   };
// };
