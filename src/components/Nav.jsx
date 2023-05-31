import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav id="nav">
      <Link to="/">Articles</Link>
      <Link to="/topics">Topics</Link>
    </nav>
  );
}
