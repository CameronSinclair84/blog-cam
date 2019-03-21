let blogPosts: BlogPost[] = [];

const createBlogPost = () => {
    let form = document.getElementById("blogPostForm");
    
    let title = form["blogTitle"].value;
    let content = form["blogContent"].value;

    blogPosts.push(new BlogPost(title, content));

    console.log(blogPosts);
}

const clearBlogPosts = () => {
    document.getElementById("outputBlogs").innerHTML = "";
}

const outputBlogPosts = () => {
    let outputTarget = document.getElementById("outputBlogs");
    let output: string = "";

    for(let i=0; i<blogPosts.length; i++){
        output += "<br>Blog entry title: "
        output += blogPosts[i].blogTitle;
        output += "<br>Blog entry post: ";
        output += blogPosts[i].blogPost;
        output += "<br>";
    }

    outputTarget.innerHTML = output;
    
}

class BlogPost {
    public blogTitle: string;
    public blogPost: string;

    constructor(title: string, post: string) {
        this.blogTitle = title;
        this.blogPost = post;
    }
}