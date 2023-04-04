import React from "react";
import ReactDOM from "react-dom/client";
import {Greeting, UserCard} from "./Greeting"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>hola Daniel</h1>);



  


root.render(
    <>
    <Greeting />
    <UserCard/>
    </>
);
