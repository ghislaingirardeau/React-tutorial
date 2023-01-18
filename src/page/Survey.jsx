import { useLocation, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

import styled from "styled-components";
import colors from "../utils/style/colors";

const Balloon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${colors.primary};
  transform: scale(${({ size }) => size});
  margin: auto;
  &:hover {
    background: ${colors.secondary};
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function Survey() {
  const { pathname } = useLocation();
  const { number } = useParams();
  const [size, setSize] = useState(1);
  return (
    <div className="App">
      <div>
        <h1>Mon questionnaire {number ? number : undefined}</h1>

        <Link className="mx-4 nav-link-bar" to={`${pathname}/123`}>
          Faq
        </Link>
        <Title>style component</Title>
        <Balloon size={size} onClick={() => setSize(size + 0.1)} />
      </div>
    </div>
  );
}

export default Survey;
