import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Rate } from "antd";

import useStyles from "./style";

const CardCourseTemplate = ({ imagem, name, rating, n_lessons }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.cardContent}>
        <Card>
          <CardActionArea className={classes.card}>
            <CardMedia component="img" height="163" image={imagem} />
            <CardActions className={classes.cardActions}>
              <Rate allowHalf defaultValue={2.5} />
              <div className={classes.cardActionsText}>{n_lessons} LESSONS</div>
            </CardActions>
            <CardContent>
              <p className={classes.cardContentText}>{name}</p>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default CardCourseTemplate;
