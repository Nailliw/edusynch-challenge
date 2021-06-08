import { Route, Switch } from "react-router";
import Home from "../Pages/Home";
import DashboardCursos from "../Pages/DashboardCursos";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/courses" component={DashboardCursos} />
      </Switch>
    </>
  );
};

export default Routes;
