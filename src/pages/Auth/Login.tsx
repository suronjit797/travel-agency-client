import { Button,  Form, Input } from "antd";
import Swal from "sweetalert2";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useGetProfileQuery, useLoginMutation } from "../../app/features/users/userApi";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginAction } from "../../app/features/users/usersSlice";

const Login = () => {
  const user = useAppSelector((state) => state.user);
  const {data: profile,} = useGetProfileQuery('') 

  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onFinish = async (values: { email: ""; password: "" }) => {
    try {
      const res = await login(values);

      if ("data" in res && res?.data?.success) {
        dispatch(loginAction({ token: res.data.token }));
        navigate("/");
      } else {
        Swal.fire({
          title: "Error!",
          text: "User Create Failed",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  if (user.isLogin) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div>
      <main className="auth_container">
        <div className="auth_body">
          <h3 className="text-center mb-4 fw-bold"> Welcome Back </h3>
          <Form
            name="login"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            initialValues={{ password: "asdasd", email: "skd@asd.com" }}
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
            <Link to="/register" className="fw-bold">
              Register now
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
