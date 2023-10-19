import { Button, Checkbox, Form, Input } from "antd";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Register = () => {
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

    // try {
    //   const res = await axios.post("http://localhost:5000/api/v1/users/sign-up", body);
    //   Swal.fire({
    //     title: "success!",
    //     text: "Registration Successful",
    //     icon: "success",
    //   });
    // } catch (error) {
    //   Swal.fire({
    //     title: "Error!",
    //     text: error.response?.data?.message || "Registration Failed",
    //     icon: "error",
    //     confirmButtonText: "OK",
    //   });
    // }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <main className="auth_container">
        <div className="auth_body">
          <h3 className="text-center mb-4 fw-bold"> Registration </h3>
          <Form
            name="registration"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >


            <Form.Item
              label="Name"
              name="name"
              className="w-100"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
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
            <Link to="/login" className="fw-bold">
              Login now
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
