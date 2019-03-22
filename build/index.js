var BlogPost = /** @class */ (function () {
    function BlogPost(title, post) {
        this.blogTitle = title;
        this.blogPost = post;
        this.blogTime = new Date();
    }
    return BlogPost;
}());
var blogPosts = [];
var createBlogPost = function () {
    var form = document.getElementById("blogPostForm");
    var title = form["blogTitle"].value;
    var content = form["blogContent"].value;
    var blogText = "";
    blogPosts.push(new BlogPost(title, content));
    //alert('Blog submitted successfully!');
    (blogPosts.length == 1) ? blogText = " blog." : blogText = " blogs.";
    document.getElementById("blogsSubmitted").innerHTML = "You have submitted " +
        blogPosts.length + blogText;
    form.reset();
};
var clearBlogPosts = function () {
    document.getElementById("blogCounter").innerHTML = "Press 'Get blogs' to display blogs!";
    document.getElementById("tab").style.display = "none";
    var tabcontent, i;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
};
var outputBlogPosts = function () {
    clearBlogPosts();
    var blogText = "";
    var preBlogText = "";
    (blogPosts.length == 1) ? (preBlogText = " is ", blogText = " blog") :
        (preBlogText = " are ", blogText = " blogs");
    document.getElementById("blogCounter").innerHTML = "There" + preBlogText + blogPosts.length +
        blogText + " to display!";
    document.getElementById("tab").style.display = "block";
    var i;
    var tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].style.display = "block";
    }
    for (i = blogPosts.length; i < tablinks.length; i++) {
        tablinks[i].style.display = "none";
    }
    var outputTarget = document.getElementsByClassName("tabcontent");
    var output = [];
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
};
var delBlogPosts = function (index) {
    blogPosts = blogPosts.filter(function (el) { return el !== blogPosts[index]; });
    outputBlogPosts();
};
var openBlog = function (evt, blogNumber) {
    var i, tabcontent, tablinks;
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
};
//# sourceMappingURL=index.js.map