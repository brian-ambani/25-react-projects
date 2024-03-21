import React from "react";

import ComponentA from "./components/ComponentA";

export const UserContext = React.createContext();

export default function App() {
  return (
    <div>
      <h1>React Hooks</h1>
      <UserContext.Provider value={"Brian"}>
        <ComponentA />
      </UserContext.Provider>
    </div>
  );
}
