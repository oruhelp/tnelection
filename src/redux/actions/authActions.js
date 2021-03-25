// Login
export const login = user => ({
  type: 'LOGIN',
  payload: user,
});

// Logout
export const logout = () => ({
  type: 'LOGOUT',
});

export const setImgbbApiKey = _imgbbApiKey => ({
  type: 'SET_IMGBB_API_KEY',
  payload: _imgbbApiKey,
});
