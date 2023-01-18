import { useLocation, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Survey() {
  const { pathname } = useLocation();
  const { number } = useParams();
  return (
    <div className="App">
      <div>
        <h1>Mon questionnaire {number ? number : undefined}</h1>
        <Link className="mx-4 nav-link-bar" to={`${pathname}/123`}>
          about
        </Link>
      </div>
    </div>
  );
}

export default Survey;
