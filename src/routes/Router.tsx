import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, UserList, UserDetails, Users } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/users">
        <Route path="/users" element={<Users />}>
          <Route index element={<UserList />} />
          <Route path=":id" element={<UserDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
