import Head from "next/head";
import styles from "@/styles/Auth.module.css";
import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const onFinish = async (values) => {
    const { address, email, firstName, lastName, password, phoneNumber } = values;

    const body = {
      name: {
        firstName,
        lastName,
      },
      email,
      password,
      address,
      phoneNumber,
    };

    try {
      const res = await axios.post("http://localhost:5000/api/v1/users/sign-up", body);
      Swal.fire({
        title: "success!",
        text: "Registration Successful",
        icon: "success",
      });
      router.push("/login");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.response?.data?.message || "Registration Failed",
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
        <title> Registration || Tour Agency </title>
        <meta name="description" content="registration || tour agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.auth_container}>
        <div className={styles.auth_body}>
          <h3 className="text-center mb-4 fw-bold"> Registration </h3>
          <Form
            name="registration"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="First Name"
              name="firstName"
              className="w-100"
              rules={[
                {
                  required: true,
                  message: "Please input your first name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              className="w-100"
              rules={[
                {
                  required: true,
                  message: "Please input your last name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

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

            <Form.Item
              label="Confirm Password"
              name="cPassword"
              dependencies={["password"]}
              className="w-100"
              rules={[
                {
                  required: true,
                  message: "Please input your confirm password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The new password that you entered do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              className="w-100"
              rules={[
                {
                  required: true,
                  message: "Please input your address!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              className="w-100"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <div className="text-center mb-3">
              <Button type="primary" htmlType="submit" className="px-5">
                Registration
              </Button>
            </div>
          </Form>
          <div className="text-center">
            Already have an account?
            <Link href="/login" className="fw-bold">
              Login now
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
