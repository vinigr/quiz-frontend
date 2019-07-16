import decode from "jwt-decode";

const TOKEN_KEY = "@queston-Token";

const AuthService = {
  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
  },

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  },

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  },

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  logout() {
    localStorage.removeItem(TOKEN_KEY);
  },

  getProfile() {
    return decode(this.getToken());
  },

  getRole() {
    return this.getProfile().role;
  }
};

export default AuthService;
