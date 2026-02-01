# CinemaScope - Movie Blog Platform

![CinemaScope](images/logo.png)

## 📖 Overview

**CinemaScope** is a dynamic movie blog web application built with Java Servlets, JSP, and MySQL. It provides a platform for movie enthusiasts to read, create, and manage movie reviews and articles. The application features a modern, responsive design with smooth animations and an intuitive user interface.

## ✨ Features

### Core Functionality
- **📝 Blog Management**
  - Create new blog posts with movie reviews and articles
  - View all published blog posts on the homepage
  - Read individual blog posts with full content
  - Delete blog posts with confirmation

- **🎬 Movie-Focused Content**
  - Dedicated fields for movie name, release year, and genre
  - Category-based organization (Reviews, Analysis, News)
  - Author attribution for all posts

- **🎨 Modern UI/UX**
  - Responsive design that works on all devices
  - Smooth animations and transitions
  - Glassmorphism effects and modern aesthetics
  - Hero section with engaging visuals
  - Interactive navigation and buttons

### Pages
1. **Home (`index.jsp`)** - Landing page with latest blog posts grid
2. **Blog Post (`blog.jsp`)** - Individual blog post view with delete functionality
3. **Add Post (`add-blog.jsp`)** - Form to create new blog posts
4. **About (`about.jsp`)** - Information about CinemaScope platform

## 🏗️ Project Structure

```
Blog/
├── WEB-INF/
│   ├── classes/
│   │   └── com/
│   │       └── blog/
│   │           ├── AddBlogServlet.class
│   │           ├── Blog.class
│   │           ├── DBUtil.class
│   │           └── DeleteBlogServlet.class
│   ├── lib/
│   │   └── mysql-connector-j-9.3.0.jar
│   └── web.xml
├── src/
│   └── com/
│       └── blog/
│           ├── AddBlogServlet.java
│           ├── Blog.java
│           ├── DBUtil.java
│           └── DeleteBlogServlet.java
├── css/
│   ├── style.css
│   └── animations.css
├── js/
│   ├── script.js
│   └── animations.js
├── images/
│   ├── logo.png
│   ├── hero.jpg
│   ├── placeholder.jpg
│   └── [other images]
├── index.jsp
├── blog.jsp
├── add-blog.jsp
├── about.jsp
├── login.jsp
├── register.jsp
└── favicon.ico
```

## 🛠️ Technology Stack

### Backend
- **Java Servlets** - Server-side request handling
- **JSP (JavaServer Pages)** - Dynamic web page generation
- **JDBC** - Database connectivity
- **MySQL** - Relational database management

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript** - Client-side interactivity
- **Responsive Design** - Mobile-first approach

### Server
- **Apache Tomcat 9.0.109** - Servlet container

## 📊 Database Schema

The application uses a MySQL database named `blogdb` with the following structure:

### `blogs` Table
```sql
CREATE TABLE blogs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    movie VARCHAR(255),
    category VARCHAR(100),
    author VARCHAR(100),
    content TEXT,
    rating VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🚀 Setup Instructions

### Prerequisites
- **Java Development Kit (JDK)** 8 or higher
- **Apache Tomcat** 9.x
- **MySQL Server** 5.7 or higher
- **MySQL Connector/J** 9.3.0 (included in `WEB-INF/lib/`)

### Database Setup

1. **Create the database:**
```sql
CREATE DATABASE blogdb;
USE blogdb;
```

2. **Create the blogs table:**
```sql
CREATE TABLE blogs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    movie VARCHAR(255),
    category VARCHAR(100),
    author VARCHAR(100),
    content TEXT,
    rating VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

3. **Update database credentials:**
   - Edit `src/com/blog/DBUtil.java`
   - Update the connection parameters:
     ```java
     return DriverManager.getConnection(
         "jdbc:mysql://localhost:3306/blogdb?useSSL=false&serverTimezone=UTC",
         "your_username",  // Change this
         "your_password"   // Change this
     );
     ```

### Application Deployment

1. **Copy the Blog folder** to Tomcat's `webapps` directory:
   ```
   apache-tomcat-9.0.109/webapps/Blog/
   ```

2. **Compile Java source files** (if not already compiled):
   ```bash
   javac -cp "WEB-INF/lib/*" -d WEB-INF/classes src/com/blog/*.java
   ```

3. **Start Tomcat server:**
   - Windows: `bin\startup.bat`
   - Linux/Mac: `bin/startup.sh`

4. **Access the application:**
   ```
   http://localhost:8080/Blog/
   ```

## 📝 Usage Guide

### Creating a Blog Post

1. Navigate to **Add Post** from the navigation menu
2. Fill in the form fields:
   - **Blog Title** - The headline of your post
   - **Movie Name** - Name of the movie being reviewed
   - **Release Year** - Year the movie was released (optional)
   - **Genre** - Movie genre (optional)
   - **Category** - Select from Reviews, Analysis, or News
   - **Author Name** - Your name
   - **Blog Content** - The main content of your post
3. Click **Publish Blog Post**
4. You'll be redirected to the homepage where your post appears

### Viewing Blog Posts

- **Homepage**: Displays all blog posts in a grid layout with excerpts
- **Click "Read More"** on any post to view the full content
- Posts are ordered by most recent first

### Deleting a Blog Post

1. Open any blog post
2. Click the **Delete Blog** button
3. Confirm the deletion in the popup dialog
4. You'll be redirected to the homepage

## 🎨 Customization

### Styling
- **Main styles**: `css/style.css`
- **Animations**: `css/animations.css`
- Modify CSS variables for quick theme changes

### JavaScript
- **Main scripts**: `js/script.js`
- **Animation handlers**: `js/animations.js`

### Images
- Replace images in the `images/` folder
- Update `logo.png` for branding
- Change `hero.jpg` for the hero section background

## 🔧 Configuration Files

### `web.xml`
- Servlet mappings
- Welcome file configuration
- Error page handling

**Key Servlets:**
- `/addBlog` - Handles blog post creation
- `/deleteBlog` - Handles blog post deletion

## 📦 Dependencies

- **MySQL Connector/J 9.3.0** - Located in `WEB-INF/lib/`
- No additional external dependencies required

## 🐛 Troubleshooting

### Common Issues

**Database Connection Errors:**
- Verify MySQL server is running
- Check database credentials in `DBUtil.java`
- Ensure `blogdb` database exists
- Verify MySQL Connector JAR is in `WEB-INF/lib/`

**404 Errors:**
- Ensure Tomcat is running
- Check the application is deployed to `webapps/Blog/`
- Verify the URL: `http://localhost:8080/Blog/`

**Servlet Not Found:**
- Ensure Java files are compiled to `WEB-INF/classes/`
- Check `web.xml` servlet mappings
- Restart Tomcat after making changes

**Blank Pages:**
- Check Tomcat logs: `logs/catalina.out`
- Verify database connection
- Check browser console for JavaScript errors

## 🔒 Security Considerations

> **⚠️ Important**: This is a demonstration project. For production use, implement:

- **SQL Injection Protection** - Use PreparedStatements (already implemented)
- **Authentication & Authorization** - Add user login system
- **Input Validation** - Sanitize all user inputs
- **XSS Prevention** - Escape output in JSP pages
- **HTTPS** - Use SSL/TLS for secure connections
- **Password Hashing** - Never store plain text passwords
- **Session Management** - Implement proper session handling

## 🚧 Future Enhancements

- [ ] User authentication and authorization
- [ ] Comment system for blog posts
- [ ] Image upload functionality
- [ ] Search and filter capabilities
- [ ] Pagination for blog posts
- [ ] Rich text editor for content creation
- [ ] Social media sharing integration
- [ ] Rating and review system
- [ ] Admin dashboard
- [ ] RESTful API endpoints

## 📄 License

This project is created for educational purposes. Feel free to use and modify as needed.

## 👥 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📧 Contact

For questions or support, please contact the development team.

---

**Built with ❤️ for movie enthusiasts**
