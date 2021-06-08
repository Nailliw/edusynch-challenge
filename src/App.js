import "./App.css";
import Routes from "./Routes";
import Navbar from "./Components/NavBar";

import { Container, CssBaseline } from "@material-ui/core";
import NavbarMobile from "./Components/NavBarMobile";
function App() {
  return (
    <>
      <CssBaseline />
      <Container disableGutters={true} maxWidth="xl" className="root">
        <Routes />
      </Container>
    </>
  );
}

export default App;
