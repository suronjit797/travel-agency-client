import React from "react";
import { Button, Form, Input, Select, Spin, DatePicker } from "antd";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import {
  useCreatePackageMutation,
  useUpdatePackageMutation,
} from "../../../app/features/packages/packagesApi";

interface Props {
  mode: "create" | "edit";
  data?: any;
}
interface IRegister {
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
  password: string;
  cPassword: string;
}

const PackagesForm: React.FC<Props> = ({ mode = "create", data }) => {
  const navigate = useNavigate();
  const [createPackage] = useCreatePackageMutation();
  const [updatePackage] = useUpdatePackageMutation();

  //
  const onFinish = async (values: any) => {
    values.amount = values.amount + "";

    try {
      if (mode === "create") {
        const res = await createPackage({
          ...values,
          image:
            "https://i.ibb.co/3hjgKVY/pexels-asad-photo-maldives-1268855.jpg%22%20alt=%22pexels-asad-photo-maldives-1268855",
          ratings: "0",
        });

        if ("data" in res && res?.data?.success) {
          navigate("/dashboard/packages");
        } else {
          Swal.fire({
            title: "Error!",
            text: "User create Failed",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } else if (mode === "edit") {
        const body = {
          ...values,
          id: data?.id,
          image:
            "https://i.ibb.co/3hjgKVY/pexels-asad-photo-maldives-1268855.jpg%22%20alt=%22pexels-asad-photo-maldives-1268855",
          ratings: "0",
        };
        const res = await updatePackage(body);

        if ("data" in res && res?.data?.success) {
          navigate("/dashboard/packages");
        } else {
          Swal.fire({
            title: "Error!",
            text: "Package Update Failed",
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
    <Spin spinning={false}>
      <Form
        name="registration"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{ ...data, date: "", lastBookingDate: "" }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 25px" }}>
          <Form.Item
            label="Title"
            name="title"
            className="w-100"
            rules={[
              {
                required: true,
                message: "Please input title!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Destination"
            name="destination"
            className="w-100"
            rules={[
              {
                required: true,
                message: "Please input user destination!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Country"
            name="country"
            className="w-100"
            rules={[
              {
                required: true,
                message: "Please input user country!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Continent"
            name="continent"
            className="w-100"
            rules={[
              {
                required: true,
                message: "Please input user continent!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Duration"
            name="duration"
            className="w-100"
            rules={[
              {
                required: true,
                message: "Please input user duration!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Tour Date"
            name="date"
            className="w-100"
            rules={[
              {
                required: true,
                message: "Please input date!",
              },
            ]}
          >
            <DatePicker className="w-100" />
          </Form.Item>

          <Form.Item
            label="Amount"
            name="amount"
            className="w-100"
            rules={[
              {
                required: true,
                message: "Please input amount!",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            label="Last Booking Date"
            name="lastBookingDate"
            className="w-100"
            rules={[
              {
                required: true,
                message: "Please input last booking date!",
              },
            ]}
          >
            <DatePicker className="w-100" />
          </Form.Item>
          <Form.Item
            label="Type"
            name="type"
            className="w-100"
            rules={[
              {
                required: true,
                message: "Please input type!",
              },
            ]}
          >
            <Select
              defaultValue=""
              style={{ width: 120 }}
              onChange={(e) => "handleChange"}
              options={[
                { label: "BUDGET", value: "BUDGET" },
                { label: "LUXURY", value: "LUXURY" },
              ]}
              className="w-100"
              placeholder="type"
            />
          </Form.Item>
        </div>

        <div className="d-flex align-items-center justify-content-end">
          <Button type="primary" htmlType="submit" className="px-4 me-2">
            {mode === "edit" ? "Update Package" : "Create Package"}
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
