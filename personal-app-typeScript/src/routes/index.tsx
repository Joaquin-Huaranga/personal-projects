import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// @ts-ignore
import { Home, NotFound } from "../pages";
// @ts-ignore
import { BaseLayout } from "../layouts";

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
};
