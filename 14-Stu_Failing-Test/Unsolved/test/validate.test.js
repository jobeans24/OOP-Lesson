const Validate = require('../validate');

// TODO: Describe a testing suite for checking the functionality of the Validate class.
describe('Validate', () => {
    describe('isPassword', () => {
        return Validate.isPassword('password');
    });
});

// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
    test('should return false when passed an empty string', () => {
        expect(Validate.isPassword('')).toBe(false);
    });
