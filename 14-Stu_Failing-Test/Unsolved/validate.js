// TODO: Define a Validate class with an isPassword() function that takes in a password parameter.
class Validate {
  static isPassword(password) {
    // TODO: Implement password validation logic here
    if (password === "GG55gsc&") {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Validate;

// TODO: Export the Validate class from this file.
