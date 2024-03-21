import { UserContext } from "../App";

export default function ComponentC() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return <div>User context value {user}</div>;
        }}
      </UserContext.Consumer>
    </div>
  );
}
