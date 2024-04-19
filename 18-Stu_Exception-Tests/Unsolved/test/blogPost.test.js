const BlogPost = require('../blogPost.js');

describe('BlogPost', () => {
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
  it('should throw an error if authorName is less than 2 characters long', () => {
    expect(() => {
      new BlogPost('a');
    }
    ).toThrow('Author must be at least 2 characters long.');
  });

  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.
  it('should throw an error if authorName contains invalid characters', () => {
    expect(() => {
      new BlogPost('a$');
    }
    ).toThrow('Author must only contain letters, numbers, dashes, and underscores.');
  });
});
