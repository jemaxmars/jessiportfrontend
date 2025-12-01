import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Page not found</p>
        <Link to="/" className="not-found__link">
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
