<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>Register - CinemaScope</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<header>
    <nav class="navbar container">
        <div class="logo">CinemaScope</div>
        <ul class="nav-links">
            <li><a href="index.jsp">Home</a></li>
            <li><a href="login.jsp">Login</a></li>
        </ul>
    </nav>
</header>

<section class="container" style="max-width:480px; margin-top:80px;">
    <div class="blog-card">

        <h2 style="text-align:center;">Create Account</h2>
        <p style="text-align:center; color:var(--text-muted); margin-bottom:30px;">
            Register to write and manage blogs
        </p>

        <form method="post" action="registerUser">

            <label>Full Name</label>
            <input type="text" name="name" required class="auth-input">

            <label>Email</label>
            <input type="email" name="email" required class="auth-input">

            <label>Password</label>
            <input type="password" name="password" required class="auth-input">

            <button type="submit" class="read-more" style="width:100%; margin-top:20px;">
                Register
            </button>

        </form>

        <p style="text-align:center; margin-top:20px;">
            Already registered?
            <a href="login.jsp">Login here</a>
        </p>

    </div>
</section>

</body>
</html>