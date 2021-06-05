import { Route, Switch } from "react-router";
import Home from "../Pages/Home";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default Routes;
