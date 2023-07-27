import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, NavLink } from 'react-router-dom'

import "./index.scss";
import { Navbar } from "./components/Navbar";

const App = () => (

  <BrowserRouter>
    <Navbar />

    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: mf-navbar</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Tailwind</div>
    </div>

    <NavLink to={""} ></NavLink>
  </BrowserRouter>

);
ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(<App />);
