import { Layout } from "antd";
import React from "react";
import { Route } from "react-router-dom";

const { Sider, Content } = Layout;

const UserLoginTemplate = (props) => {
  let { Component, ...restRoute } = props;
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <>
            <Layout>
              <Sider
                style={{
                  height: window.innerHeight,
                  backgroundImage: "url(https://picsum.photos/1000)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                width={"50vw"}
              ></Sider>
              <Content
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Component {...propsRoute} />
              </Content>
            </Layout>
          </>
        );
      }}
    />
  );
};

export default UserLoginTemplate;
