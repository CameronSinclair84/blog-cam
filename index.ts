class BlogPost {
    public blogTitle: string;
    public blogPost: string;
    public blogTime: Date;

    constructor(title: string, post: string) {
        this.blogTitle = title;
        this.blogPost = post;
        this.blogTime = new Date();
    }
}

let blogPosts: BlogPost[] = [];
let totalBlogPosts: number = 0;

const createBlogPost = () => {
    let form = document.getElementById("blogPostForm");

    let title: string = form["blogTitle"].value;
    let content: string = form["blogContent"].value;
    let blogText: string = "";

    blogPosts.push(new BlogPost(title, content));
    totalBlogPosts++;

    //alert('Blog submitted successfully!');

    (totalBlogPosts == 1) ? blogText = " blog." : blogText = " blogs.";
    document.getElementById("blogsSubmitted").innerHTML = "You have submitted " +
        totalBlogPosts + blogText;

    form.reset();
    outputBlogPosts();
}

const clearBlogPosts = () => {
    document.getElementById("blogCounter").innerHTML = "Press 'Get blogs' to display blogs!";
    document.getElementById("tab").style.display = "none";
    let tabcontent, i;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
}

const outputBlogPosts = () => {
    clearBlogPosts();

    let blogText: string = "";
    let preBlogText: string = "";

    (blogPosts.length == 1) ? (preBlogText = " is ", blogText = " blog") :
        (preBlogText = " are ", blogText = " blogs");

    document.getElementById("blogCounter").innerHTML = "There" + preBlogText + blogPosts.length +
        blogText + " to display!";


    document.getElementById("tab").style.display = "block";
    let i: number;
    let tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].style.display = "block";
    }

    for (i = blogPosts.length; i < tablinks.length; i++) {
        tablinks[i].style.display = "none";
    }

    let outputTarget = document.getElementsByClassName("tabcontent");

    let output: string[] = [];

    for (i = 0; i < blogPosts.length; i++) {
        output[i] = "";
        output[i] += "<br><strong>Blog posted at: </strong>";
        output[i] += blogPosts[i].blogTime;
        output[i] += "<br><strong>Blog entry title: </strong>";
        output[i] += blogPosts[i].blogTitle;
        output[i] += "<br><strong>Blog entry content: </strong>";
        output[i] += blogPosts[i].blogPost;
        output[i] += "<br><br>";
        output[i] += "<button type='button' class='submit' onclick='delBlogPosts(" + i + "); return false;'>Delete blog</button>";
    }

    for (i = 0; i < output.length; i++) {
        outputTarget[i].innerHTML = output[i];
    }
}

const delBlogPosts = (index: number) => {
    blogPosts = blogPosts.filter(el => el !== blogPosts[index]);
    outputBlogPosts();
}

const openBlog = (evt, blogNumber) => {
    let i: number, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(blogNumber).style.display = "block";
    evt.currentTarget.className += " active";
}