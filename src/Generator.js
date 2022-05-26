import rez from "./Test";

const Generator = () => {
  const generate = () => {
    alert("testing");
  };
  return (
    <div className="generator">
      <h1>Generator</h1>
      <p>
        <button onClick={generate}>Generate</button>
      </p>
    </div>
  );
};

export default Generator;
