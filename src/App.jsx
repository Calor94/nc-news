import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Article from "./components/Article";
import Topics from "./components/Topics";

export default function App() {
  return (
    <div id="wrapper">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />;
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </div>
  );
}
