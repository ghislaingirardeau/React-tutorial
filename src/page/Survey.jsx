import { Routes, Route, useLocation, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import About from "./About.jsx";

function Survey() {
  const { pathname } = useLocation();
  const { number } = useParams();
  return (
    <div className="App">
      <div>
        <h1>Mon questionnaire {number ? number : undefined}</h1>
        <Link className="mx-4 nav-link-bar" to={`${pathname}/About`}>
          about
        </Link>
      </div>
      <Routes>
        <Route exact path={`${pathname}/About`} element={<About />} />
      </Routes>
    </div>
  );
}

export default Survey;
