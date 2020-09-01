import React from "react";
import ReactDOM from "react-dom";

export default function App(): JSX.Element {
  return <h1>Hi,from tsx webpack</h1>;
}

const root = document.getElementById("app-root");

ReactDOM.render(<App />, root);
