<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.sql.*,com.blog.DBUtil" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CinemaScope - Movie Blog</title>

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="icon" href="favicon.ico" type="image/x-icon">

    <script src="js/script.js" defer></script>
    <script src="js/animations.js" defer></script>
</head>

<body>

<!-- ================= HEADER ================= -->
<header>
    <nav class="navbar container">
        <div class="logo">
            <img src="images/logo.png" alt="CinemaScope Logo">
            <span>CinemaScope</span>
        </div>

        <ul class="nav-links">
            <li><a href="index.jsp">Home</a></li>
            <li><a href="add-blog.jsp">Add Post</a></li>
            <li><a href="about.jsp">About</a></li>
        </ul>
    </nav>
</header>

<!-- ================= HERO ================= -->
<section class="hero">
    <div class="hero-content">
        <h1>CinemaScope</h1>
        <p>Where Movies Come to Life</p>
    </div>
</section>

<!-- ================= BLOG LIST ================= -->
<section class="container reveal">
    <h2>Latest Articles</h2>

    <div class="blog-grid">

<%
Connection con = null;
PreparedStatement ps = null;
ResultSet rs = null;
boolean hasBlogs = false;

try {

    con = DBUtil.getConnection();

    ps = con.prepareStatement(
        "SELECT id, title, category, author, content FROM blogs ORDER BY id DESC"
    );

    rs = ps.executeQuery();

    while (rs.next()) {
        hasBlogs = true;
%>

        <div class="blog-card">

            <h3><%= rs.getString("title") %></h3>

            <div class="card-meta">
                <span class="category"><%= rs.getString("category") %></span>
                &nbsp;|&nbsp;
                By <%= rs.getString("author") %>
            </div>

            <p class="excerpt">
                <%
                    String content = rs.getString("content");
                    if (content != null && content.length() > 150) {
                        out.print(content.substring(0,150) + "...");
                    } else {
                        out.print(content);
                    }
                %>
            </p>

            <a href="blog.jsp?id=<%= rs.getInt("id") %>" class="read-more btn-hover">
                Read More
            </a>

        </div>

<%
    }

    if (!hasBlogs) {
%>
        <p style="text-align:center; margin-top:30px; color:#bbb;">
            No blogs yet. Be the first to publish one 🚀
        </p>
<%
    }

} catch (Exception e) {
%>

        <p style="color:red; text-align:center;">
            Error loading blogs
        </p>

<%
    e.printStackTrace();

} finally {

    if (rs != null) rs.close();
    if (ps != null) ps.close();
    if (con != null) con.close();
}
%>

    </div>
</section>

<!-- ================= LOAD MORE (UI ONLY) ================= -->
<div class="container" style="text-align:center; margin:3rem 0;">
    <button class="read-more btn-hover" onclick="loadMoreContent()">
        Load More Articles
    </button>
</div>

<!-- ================= FOOTER ================= -->
<footer>
    <div class="footer-content">
        <p>&copy; 2024 CinemaScope. All rights reserved.</p>
        <div class="social-links">
            <a href="#">X</a>
            <a href="#">f</a>
            <a href="#">i</a>
            <a href="#">▶</a>
        </div>
    </div>
</footer>

</body>
</html>