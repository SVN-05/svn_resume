"use client";
import React from "react";
import AppNav from "./AppNavBar/AppNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppLayout = ({ children }) => {
  return (
    <main className="w-full min-h-screen">
      <ToastContainer />
      <AppNav />
      {children}
    </main>
  );
};

export default AppLayout;
