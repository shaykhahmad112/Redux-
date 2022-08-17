const initalState = [
  {
    email: "",
    password: ""
  }
];
const loginReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return [...state, {
        email: payload.email,
        password: payload.password
      }];
    default:
      return state;
  }
};
export default loginReducer;