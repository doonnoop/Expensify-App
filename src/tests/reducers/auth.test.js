import authReducer from "../../reducers/auth";

test("should set uid for login", () => {
  const uid = "1";
  const state = authReducer({}, { type: "LOGIN", uid });
  expect(state.uid).toBe(uid);
});

test("should clear uid for logout", () => {
  const state = authReducer({ uid: "anything" }, { type: "LOGOUT" });
  expect(state).toEqual({});
});
