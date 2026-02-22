package com.blog;

import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class AddBlogServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        try {
            String title = req.getParameter("title");
            String movie = req.getParameter("movie");
            String category = req.getParameter("category");
            String author = req.getParameter("author");
            String content = req.getParameter("content");

            Connection con = DBUtil.getConnection();

            String sql =
                "INSERT INTO blogs (title, movie, category, author, content, image) " +
                "VALUES (?, ?, ?, ?, ?, ?)";

            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, title);
            ps.setString(2, movie);
            ps.setString(3, category);
            ps.setString(4, author);
            ps.setString(5, content);
            ps.setString(6, null);   // no image

            ps.executeUpdate();

            ps.close();
            con.close();

            res.sendRedirect("index.jsp");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}