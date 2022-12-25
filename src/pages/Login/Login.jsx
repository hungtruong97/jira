import React, { useState } from "react";
import { Input, Button } from "antd";
import {
  createFromIconfontCN,
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  LockOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { withFormik, Form } from "formik";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const Login = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
  return (
    <div className="container" style={{ height: window.innerHeight }}>
      <div
        className="flex flex-col justify-center items-center"
        style={{ height: window.innerHeight }}
      >
        <h3 className="text-center">Login</h3>
        <div className="flex flex-col justify-center items-center">
          <Input
            onChange={handleChange}
            className="mt-3"
            size="large"
            placeholder="Username"
            prefix={<UserOutlined />}
            name="username"
          />
          <Input.Password
            onChange={handleChange}
            className="mt-3"
            placeholder="Password"
            prefix={<LockOutlined />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            name="password"
          />
          <Button className="mt-3" type="primary" onSubmit={handleSubmit}>
            Login
          </Button>
        </div>

        <div className="social mt-3 flex gap-2">
          <Button
            className="flex justify-center items-center"
            type="primary"
            shape="circle"
            icon={<IconFont type="icon-facebook" size="large" />}
            size={"large"}
          />
          <Button
            className="flex justify-center items-center"
            type="primary"
            shape="circle"
            icon={<TwitterOutlined size="large" />}
            size={"large"}
          />
        </div>
      </div>
    </div>
  );
};

const LoginWithFormik = withFormik({
  mapPropsToValues: () => ({ username: "", password: "" }),

  // Custom sync validation
  validate: (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: "Hello",
})(Login);

export default LoginWithFormik;
