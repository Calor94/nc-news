import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Article from "./components/Article";

export default function App() {
  return (
    <div id="wrapper">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </div>
  );
}
