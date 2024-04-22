// Import readFile and writeFile from the fs/promises module. The fs/promises module exports methods that return
// promises for common file system tasks.
const { readFile, writeFile } = require('fs/promises');
const BlogPost = require('./lib/blogPost.js');

// TODO: First, call readFile to asynchronously read the data from data/post.json.
readFile('./data/post.json', 'utf-8').then((json) => {
  console.log('Received data from post.json');
  // TODO: parse the json string and assign the resulting object to a variable
  const blogData = JSON.parse(json);
  // TODO: Use the BlogPost class to create a new BlogPost object and use its `render()` method to return an html string.
  const blogPost = new BlogPost(
    blogData.title, 
    blogData.author, 
    blogData.createdOn, 
    blogData.text);

  const html = blogPost.render();

  return writeFile('./output/post.html', html);
}).then(() => {
  console.log('Wrote data to post.html');
});
