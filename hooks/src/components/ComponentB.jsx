import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { UserContext, ChannelContext } from "../App";

export default function ComponentB() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      {user} - {channel}
    </div>
  );
}
