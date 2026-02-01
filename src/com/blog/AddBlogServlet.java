package com.blog;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class AddBlogServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        System.out.println("=== ADD BLOG SERVLET HIT ===");

        try {
            // 🔹 Read form values
            String title = req.getParameter("title");
            String movie = req.getParameter("movie");
            String category = req.getParameter("category");
            String author = req.getParameter("author");
            String content = req.getParameter("content");

            // 🔹 Debug print (important)
            System.out.println("TITLE = " + title);
            System.out.println("MOVIE = " + movie);
            System.out.println("CATEGORY = " + category);
            System.out.println("AUTHOR = " + author);
            System.out.println("CONTENT = " + content);

            // 🔹 DB connection
            Connection con = DBUtil.getConnection();

            String sql =
               " INSERT INTO blogs (title, movie, category, author, content, rating)"
 +
                "VALUES (?, ?, ?, ?, ?, ?)";

            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, title);
            ps.setString(2, movie);
            ps.setString(3, category);
            ps.setString(4, author);
            ps.setString(5, content);
            ps.setString(6, "placeholder.jpg");

            int rows = ps.executeUpdate();
            System.out.println("ROWS INSERTED = " + rows);

            // 🔹 Redirect after success
            res.sendRedirect("index.jsp");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
