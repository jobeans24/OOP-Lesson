const Validate = require('../validate');

describe('Validate', () => {
  // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
  test('should return false when the password is less than 8 characters', () => {
    expect(Validate.isPassword('pass')).toBe(false);
  });
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
  test('should return false when the password does not contain at least 1 uppercase', () => {
    expect(Validate.isPassword('password')).toBe(false);
  });
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
  test('should return false when the password does not contain at least 1 lowercase', () => {
    expect(Validate.isPassword('PASSWORD')).toBe(false);
  });
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
  test('should return false when the password does not contain at least 1 number', () => {
    expect(Validate.isPassword('Password')).toBe(false);
  });
  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
  test('should return true when the password is at least 8 characters long and contains an uppercase, lowercase, and number', () => {
    expect(Validate.isPassword('Password1')).toBe(true);
  });

});
