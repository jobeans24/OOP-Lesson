// TODO: Add a comment describing what kind of function this is
// this is a constructor function
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.comments = [];
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
// the purpose of this propotype is to add the addComment method to the BlogPost object
BlogPost.prototype.addComment = function(comment) {
  this.comments.push(comment);
};

const post = new BlogPost(
  'John Doe',
  'My Second Post',
  'Cats are super cute!',
  '12/16/2021'
);

post.addComment('Nice post, I like it!');
post.printMetaData();


// TODO: Add a comment describing what you expect to see printed in the console
// I expect to see the post object with the comments array with the comment added
console.log(post.comments);
