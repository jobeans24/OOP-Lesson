class Validate {
  static isPassword(password) {
    if (password.length < 8) {
      return false;
    }
    if (password === password.toLowerCase()) {
      return false;
    }
    if (password === password.toUpperCase()) {
      return false;
    }
    if (!/\d/.test(password)) {
      return false;
    }
    return true;
  }
}

module.exports = Validate;


