import "./style.css";
import useStyles from "./makestyles";

const Home = () => {
  const classes = useStyles();
  return (
    <div className="container">
      <div className="textContent"></div>
      <div className="leftSide">
        <div className="shapeLeftContent">
          <div className="leftSideShapeFirst"></div>
          <div className="leftSideShapeSecond"></div>
          <div className="leftSideShapeThird"></div>
          <div className="leftSideShapeFourth"></div>
        </div>
      </div>

      <div className="rightSide">
        <div className="shapeRightContent">
          <div className="rightSideShapeFirst"></div>
          <div className="rightSideShapeSecond"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
