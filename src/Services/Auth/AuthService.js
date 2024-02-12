const AuthService = {
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  },
  isAuthenticated() {
    const token =  localStorage.getItem('token') !== null;
    return token;
  }
};

export default AuthService;
