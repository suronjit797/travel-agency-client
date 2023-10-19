import React from "react";
import { Button, Form, Input, Select, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import {
  useGetProfileQuery,
  useRegisterMutation,
  useUpdateUserMutation,
} from "../../../app/features/users/userApi";
import Swal from "sweetalert2";
import { userRole, userRoleArr } from "../../../assets/constant";
import { IUser } from "../../../interface/userInterface";

interface Props {
  mode: "create" | "edit";
  data?: IUser;
}
interface IRegister {
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
  password: string;
  cPassword: string;
}

const options = userRoleArr.map((role) => ({ value: role, label: role }));

const PackagesForm: React.FC<Props> = ({ mode = "create", data }) => {
  const navigate = useNavigate();
  const [register] = useRegisterMutation();
  const [updateUser] = useUpdateUserMutation();
  const { data: user, isLoading } = useGetProfileQuery("");

  //
  const onFinish = async (values: IRegister) => {
    try {
      const { password, cPassword, ...payload } = values;

      if (mode === "create") {
        if (password !== cPassword) {
          return console.log("not matched");
        }

        const body = { ...payload, password };
        const res = await register(body);

        if ("data" in res && res?.data?.success) {
          navigate("/dashboard/users");
        } else {
          Swal.fire({
            title: "Error!",
            text: "User create Failed",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } else if (mode === "edit") {
        const body = { ...payload, id: data?.id };
        const res = await updateUser(body);

        if ("data" in res && res?.data?.success) {
          navigate("/dashboard/users");
        } else {
          Swal.fire({
            title: "Error!",
            text: "User Update Failed",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Spin spinning={isLoading}>
      <Form
        name="registration"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{ ...data }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 25px" }}>
          <Form.Item
            label="Name"
            name="name"
            className="w-100"
            rules={[
              {
                required: true,
                message: "Please input user name!",
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
                message: "Please input user email!",
              },
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          {mode === "create" && (
            <>
              <Form.Item
                label="Password"
                name="password"
                className="w-100"
                rules={[
                  {
                    required: true,
                    message: "Please input user password!",
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
                    message: "Please input user confirm password!",
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
            </>
          )}

          <Form.Item
            label="Address"
            name="address"
            className="w-100"
            rules={[
              {
                required: true,
                message: "Please input user address!",
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
                message: "Please input user phone number!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          {user?.success && user?.data?.role === userRole.superAdmin && (
            <Form.Item
              label="Role"
              name="role"
              className="w-100"
              rules={[
                {
                  required: true,
                  message: "Please input user role!",
                },
              ]}
            >
              <Select
                defaultValue=""
                style={{ width: 120 }}
                onChange={(e) => "handleChange"}
                options={options}
                className="w-100"
                placeholder="Role"
              />
            </Form.Item>
          )}
        </div>

        <div className="d-flex align-items-center justify-content-end">
          <Button type="primary" htmlType="submit" className="px-4 me-2">
            {mode === "edit" ? "Update User" : "Create User"}
          </Button>
          <Button
            onClick={() => navigate(-1)}
            danger
            type="primary"
            htmlType="submit"
            className="px-4 "
          >
            Cancel
          </Button>
        </div>
      </Form>
    </Spin>
  );
};

export default PackagesForm;
