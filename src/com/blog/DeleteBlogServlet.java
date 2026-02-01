package com.blog;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.annotation.WebServlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;

@WebServlet("/deleteBlog")
public class DeleteBlogServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        String idParam = req.getParameter("id");

        if (idParam == null) {
            res.sendRedirect("index.jsp");
            return;
        }

        try {
            int id = Integer.parseInt(idParam);

            Connection con = DBUtil.getConnection();
            PreparedStatement ps =
                con.prepareStatement("DELETE FROM blogs WHERE id = ?");

            ps.setInt(1, id);
            ps.executeUpdate();

            ps.close();
            con.close();

            // Redirect to home after delete
            res.sendRedirect("index.jsp");

        } catch (Exception e) {
            e.printStackTrace();
            res.sendRedirect("index.jsp");
        }
    }
}