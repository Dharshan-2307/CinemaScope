<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.sql.*,com.blog.DBUtil" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Blog - CinemaScope</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

<!-- ✅ HEADER -->
<header>
    <nav class="navbar container">
        <div class="logo">CinemaScope</div>
        <ul class="nav-links">
            <li><a href="index.jsp">Home</a></li>
            <li><a href="add-blog.jsp">Add Post</a></li>
            <li><a href="about.jsp">About</a></li>
        </ul>
    </nav>
</header>

<%
String idParam = request.getParameter("id");

if (idParam == null) {
%>
    <h2 style="text-align:center; margin-top:50px;">Invalid blog request</h2>
<%
    return;
}

int blogId = Integer.parseInt(idParam);

Connection con = null;
PreparedStatement ps = null;
ResultSet rs = null;

try {
    con = DBUtil.getConnection();
    ps = con.prepareStatement(
        "SELECT title, category, author, content FROM blogs WHERE id=?"
    );
    ps.setInt(1, blogId);
    rs = ps.executeQuery();

    if (!rs.next()) {
%>
        <h2 style="text-align:center; margin-top:50px;">Blog not found</h2>
<%
    } else {
%>

<section class="container blog-post">

    <h1><%= rs.getString("title") %></h1>

    <p class="card-meta">
        <span class="category"><%= rs.getString("category") %></span>
        &nbsp;|&nbsp;
        By <%= rs.getString("author") %>
    </p>

    <p style="margin-top:25px; line-height:1.8;">
        <%= rs.getString("content") %>
    </p>

    <br><br>

    <div style="display:flex; gap:20px; align-items:center;">

        <a href="index.jsp" class="read-more btn-hover">
            ← Back to Home
        </a>

        <form method="post" action="deleteBlog"
              onsubmit="return confirm('Delete this blog?');">

            <input type="hidden" name="id" value="<%= blogId %>">

            <button type="submit"
                    class="read-more btn-hover"
                    style="background:#8b0000;">
                Delete Blog
            </button>
        </form>

    </div>

</section>

<%
    }
} catch(Exception e) {
    e.printStackTrace();
%>
<p style="color:red; text-align:center;">Error loading blog</p>
<%
} finally {
    if(rs!=null) rs.close();
    if(ps!=null) ps.close();
    if(con!=null) con.close();
}
%>

</body>
</html>