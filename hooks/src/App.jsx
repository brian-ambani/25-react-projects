import React from "react";
import "./App.css";

import ComponentA from "./components/ComponentA";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export default function App() {
  return (
    <div className="app">
      <h1>React Hooks</h1>
      <UserContext.Provider value={"Brain"}>
        <ChannelContext.Provider value={"Coded Brain"}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
