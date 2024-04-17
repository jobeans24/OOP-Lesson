// TODO: Create a class constructor named ForumItem that takes in 'authorName' and 'createdOn'.
class ForumItem {
  constructor(authorName, createdOn) {
    this.authorName = authorName;
    this.createdOn = createdOn;
  }
}
// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends ForumItem {
  constructor(authorName, title, text, createdOn) {
    super(authorName, createdOn);
    this.title = title;
    this.text = text;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}
class Comment extends ForumItem {
  constructor(authorName, text, createdOn) {
    super(authorName, createdOn);
    this.text = text;
  }
}


// TODO: Create a new object using the Comment class constructor.
const comment = new Comment('Jane Doe', 'I love cats!', '12/16/2021');
// TODO: Create a new object using the BlogPost class constructor.
const post = new BlogPost('John Doe', 'My Second Post', 'Cats are super cute!', '12/16/2021');
// TODO: Log both newly created BlogPost and Comment to the console.  
console.log(post);
console.log(comment);