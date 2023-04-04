import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>hola Daniel</h1>);

function Greeting() {
  const user ={

    firstName : "Daniel",
    lastName : "Chica"


  };

  
}

root.render(
  <div>
    <Greeting />
  </div>
);
