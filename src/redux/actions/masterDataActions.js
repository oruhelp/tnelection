// Login
export const login = (user) => ({
  type: 'LOGIN',
  payload: user,
});

export const override = (masterData) => ({
  type: 'OVERIDE',
  payload: masterData,
});
