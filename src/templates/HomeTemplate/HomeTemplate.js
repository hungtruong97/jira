import React from "react";
import Header from "../../components/Home/Header/Header";
import { Route } from "react-router-dom";

const HomeTemplate = (props) => {
  let { Component, ...restParam } = props;
  return (
    <Route
      {...restParam}
      render={(propsRoute) => {
        return (
          <>
            <Header />
            <Component {...propsRoute} />
          </>
        );
      }}
    />
  );
};

export default HomeTemplate;
