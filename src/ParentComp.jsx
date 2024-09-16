import React from "react";
import ChildComp from "./ChildComponent";

function ParentComp() {
  const ParentMethod = (name, surname) => {
    console.log("Hello from Parent " + name + " " + surname);
  };
  return (
    <div>
      <ChildComp callMethod={ParentMethod} />
    </div>
  );
}

export default ParentComp;
