import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/signup">signup</Link> |
        <Link to="/">Home</Link> | <Link to="/login ">login</Link> |
        <Link to="/">Home</Link> |{" "}
        <Link to="/ingredients new ">ingredients new</Link> |
        <Link to="/">Home</Link> | <Link to="/login ">login</Link> |
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
