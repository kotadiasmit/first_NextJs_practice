"use client";

import React from "react";
import style1 from "@/app/styles/style1.module.css";
const AddUser = () => {
  return (
    <button className={`${style1.main} hover:bg-blue-600 mt-5`}>
      Add User
    </button>
  );
};

export default AddUser;
