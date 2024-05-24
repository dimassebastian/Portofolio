import { ReactNode } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
interface CustomLinkProps {
  to: string;
  children: ReactNode;
  [key: string]: any; // This allows any additional props to be passed in
}

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/">About</CustomLink>
        <CustomLink to="projects">Projects</CustomLink>
        <CustomLink to="info">Info</CustomLink>
        <CustomLink to="faq">Faq</CustomLink>
      </ul>
    </nav>
  );
};

const CustomLink = ({ to, children, ...props }: CustomLinkProps) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
