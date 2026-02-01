<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add New Blog Post - CinemaScope</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <script src="js/script.js" defer></script>
    <script src="js/animations.js" defer></script>
</head>
<body>
    <!-- Header -->
    <header>
        <nav class="navbar container">
            <div class="logo">CinemaScope</div>
            <ul class="nav-links">
                <li><a href="index.jsp">Home</a></li>
                <li><a href="blog.jsp">Blog</a></li>
                <li><a href="add-blog.jsp">Add Post</a></li>
                <li><a href="about.jsp">About</a></li>
            </ul>
        </nav>
    </header>

    <!-- Add Blog Form -->
    <main class="add-blog-page">
    <div class="add-blog-card">
        <h2>Add New Blog Post</h2>

        <form 
    id="blogForm"
    method="post"
    action="addBlog"
    onsubmit="return validateForm('blogForm')"
>

    <div class="form-group">
        <label>Blog Title</label>
        <input type="text" name="title" placeholder="Enter blog title" required>
    </div>

    <div class="form-group">
        <label>Movie Name</label>
        <input type="text" name="movie" placeholder="Enter movie name" required>
    </div>

    <div class="form-row">
        <div class="form-group">
            <label>Release Year</label>
            <input type="number" name="year" placeholder="e.g. 2024">
        </div>

        <div class="form-group">
            <label>Genre</label>
            <input type="text" name="genre" placeholder="Sci-Fi, Drama, Comedy">
        </div>
    </div>

    <div class="form-group">
        <label>Category</label>
        <select name="category" required>
            <option value="">Select category</option>
            <option value="Reviews">Reviews</option>
            <option value="Analysis">Analysis</option>
            <option value="News">News</option>
        </select>
    </div>

    <div class="form-group">
        <label>Author Name</label>
        <input type="text" name="author" placeholder="Enter author name" required>
    </div>

    <div class="form-group">
        <label>Blog Content</label>
        <textarea name="content" rows="5" placeholder="Write your blog post here..." required></textarea>
    </div>

    <button type="submit" class="publish-btn">Publish Blog Post</button>

</form>
    </div>
</main>


    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <p>&copy; 2024 CinemaScope. All rights reserved.</p>
            <div class="social-links">
                <a href="#" title="Twitter">X</a>
                <a href="#" title="Facebook">f</a>
                <a href="#" title="Instagram">i</a>
                <a href="#" title="YouTube">▶</a>
            </div>
        </div>
    </footer>
</body>
</html>