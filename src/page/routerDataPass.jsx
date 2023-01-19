import {
  useLoaderData,
  useSearchParams,
  useLocation,
  useMatch,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

function DataPassRoute() {
  //CREATE A ROUTE GUARD
  // to check if the path is the one we expect
  // IF NOT BATMAN REDIRECT TO HOME
  const match = useMatch("/routerDataPass/batman", {
    path: "/routerDataPass/:movieName",
    exact: true,
    strict: true,
  });
  const navigate = useNavigate();
  console.log(match);
  useEffect(() => {
    if (!match) {
      navigate("/");
    }
  });
  // END

  // GET DYNAMICLY THE DATA FROM FETCH LOADER ROUTE
  const dataFromRouteLoader = useLoaderData();
  console.log(dataFromRouteLoader);

  // GET THE SEARCH PARAMS FROM URL EX http://localhost:3000/DataPassRoute?n=32
  const [searchParams] = useSearchParams();
  const number = searchParams.get("n");
  console.log(number);

  // GET THE STATE OR DATA PASS INSIDE THE LINK
  const location = useLocation();
  console.log(location, location.state);

  return (
    <div>
      <h1>Ma page DataPassRoute</h1>
    </div>
  );
}

export default DataPassRoute;
