const AuthService = {
  logout() {
    // Implement logout logic, e.g., clear local storage or session storage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  },
  isAuthenticated() {
    // Implement logic to check if the user is authenticated, e.g., check if a token exists in local storage
    const token =  localStorage.getItem('token') !== null;
    return token;
  }
};

export default AuthService;
