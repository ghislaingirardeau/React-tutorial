/* import { useLocation, Link } from "react-router-dom"; */
import { Component } from "react";

import styled from "styled-components";
import colors from "../utils/style/colors";
import QuestionForm from "../components/QuestionForm";

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

const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

/* function Survey() {
  const { pathname } = useLocation();
  const [size, setSize] = useState(1);
  return (
    <div className="App">
      <div>
        <h1>Mon questionnaire </h1>

        <Link className="mx-4 nav-link-bar" to={`${pathname}/123`}>
          Faq
        </Link>
        <Title>style component</Title>
        <Balloon size={size} onClick={() => setSize(size + 0.1)} />
        <QuestionForm />
      </div>
    </div>
  );
} */

// CREATE A COMPONENT WITH A CLASS

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      size: 1,
    };
  }
  updateInputValue(value) {
    this.setState({ inputValue: value });
  }
  animBaloon(value) {
    this.setState({ size: value + 0.1 });
  }
  render() {
    const { dataProp } = this.props;
    return (
      <div className="App">
        <div>
          <h1>Mon questionnaire {dataProp} </h1>

          <Title>style component</Title>
          <Balloon
            size={this.state.size}
            onClick={() => this.animBaloon(this.state.size)}
          />

          <div>
            {this.state.inputValue}
            <input onChange={(e) => this.updateInputValue(e.target.value)} />
          </div>
          <QuestionForm />
        </div>
      </div>
    );
  }
}

export default Survey;
