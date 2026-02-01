<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>Create Account - CinemaScope</title>
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

<section class="container auth-wrapper">

    <div class="auth-card">

        <h1>Create Your CinemaScope Account</h1>

        <p class="auth-subtitle">
            Join a community that lives and breathes cinema.
        </p>

        <form method="post" action="registerUser" class="auth-form">

            <div class="form-group">
                <label>Full Name</label>
                <input type="text" name="name" placeholder="Your full name" required>
            </div>

            <div class="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="you@example.com" required>
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" placeholder="Create a strong password" required>
            </div>

            <button type="submit" class="auth-btn">
                Create Account
            </button>

        </form>

        <p class="auth-footer">
            Already part of CinemaScope?
            <a href="login.jsp">Login here</a>
        </p>

    </div>

</section>

</body>
</html>