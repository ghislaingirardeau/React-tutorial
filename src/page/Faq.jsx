import { useParams } from "react-router-dom";

function About() {
  const { id } = useParams();
  return (
    <div className="App">
      <div>
        <h1>Here is the faq number {id}</h1>
      </div>
    </div>
  );
}

export default About;