import React from "react";
import { List } from "antd";
import CardCourseTemplate from "../CardCourseTemplate";
import "./styles.css";
import { characters } from "../../assets/examples";
import { Hidden } from "@material-ui/core";

const CardCourse = () => {
  return (
    <>
      <Hidden only={["sm", "xs"]}>
        <List
          justify="space-around"
          className="cardContent"
          grid={{
            gutter: 30,
            column: 3,
          }}
          pagination={{
            showSizeChanger: true,
            pageSizeOptions: ["10", "50", "100"],
            responsive: true,
            pageSize: 6,
          }}
          dataSource={characters}
          renderItem={(item) => (
            <List.Item>
              <CardCourseTemplate
                imagem={item.imagem}
                name={item.name}
                n_lessons={item.n_lessons}
              />
            </List.Item>
          )}
        ></List>
      </Hidden>
      <Hidden only={["md", "lg", "xl"]}>
        <List
          className="cardContent"
          grid={{
            column: 1,
          }}
          pagination={{
            showSizeChanger: true,
            pageSizeOptions: ["10", "50", "100"],
            responsive: true,
            pageSize: 2,
          }}
          dataSource={characters}
          renderItem={(item) => (
            <List.Item>
              <CardCourseTemplate
                imagem={item.imagem}
                name={item.name}
                n_lessons={item.n_lessons}
              />
            </List.Item>
          )}
        ></List>
      </Hidden>
    </>
  );
};

export default CardCourse;
