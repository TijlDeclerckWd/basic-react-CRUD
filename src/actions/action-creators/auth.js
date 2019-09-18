

export const signIn = (userId) => {
  return { type: 'SIGN_IN', userId };
};

export const signOut = () => {
  return { type: 'SIGN_OUT' };
};
