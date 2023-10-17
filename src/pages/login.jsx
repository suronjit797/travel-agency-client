import Head from "next/head";
import styles from "@/styles/Auth.module.css";
import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import axios from "axios";

import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/");
  }

  const onFinish = async (values) => {
    try {
      const result = await signIn("credentials", { ...values, redirect: false });
      console.log(result);

      if (result?.error) {
        alert("Login failed. Please check your credentials.");
      } else {
        Swal.fire({
          title: "success!",
          text: "Login Success",
          icon: "success",
        });
        router.push("/");
      }
      //   const res = await axios.post("http://localhost:5000/api/v1/users/login", values);
      //   if (res.data?.success) {
      //     localStorage.setItem("token", res.data?.data?.accessToken);
      //     Swal.fire({
      //       title: "success!",
      //       text: "Login Success",
      //       icon: "success",
      //     });
      //     router.push("/");
      //   }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: error.response?.data?.message || "Login Failed",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Head>
        <title> Login || Tour Agency </title>
        <meta name="description" content="Login || tour agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.auth_container}>
        <div className={styles.auth_body}>
          <h3 className="text-center mb-4 fw-bold"> Welcome Back </h3>
          <Form
            name="login"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            initialValues={{ password: "asdasd", email: "sk@asd.com" }}
          >
            <Form.Item
              label="Email"
              name="email"
              className="w-100"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              className="w-100"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <div className="text-center mb-3">
              <Button type="primary" htmlType="submit" className="px-5">
                Login
              </Button>
            </div>
          </Form>
          <div className="text-center">
            Do not have an account?
            <Link href="/register" className="fw-bold">
              Register now
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
