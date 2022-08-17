const initalState = [
  {
    email: "",
    password: ""
  }
];
const signupReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SIGNUP":
      return [...state, {
        name: payload.name,
        email: payload.email,
      }];
    default:
      return state;
  }
};
export default signupReducer;