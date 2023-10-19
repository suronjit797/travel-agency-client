import React from "react";
import { Space, Table, Tag, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useGetUserQuery, useRemoveUserMutation } from "../../../app/features/users/userApi";
import { IUser } from "../../../interface/userInterface";
import { Spin } from "antd";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiPen } from "react-icons/bi";
import { Link } from "react-router-dom";

const Packages = () => {
  const { data: user, error, isLoading } = useGetUserQuery("");
  const [removeUser] = useRemoveUserMutation();

  const columns: ColumnsType<Partial<IUser>> = [
    {
      title: "No",
      dataIndex: "no",
      render: (_, data, ind) => ind + 1,
      width: "60px",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      width: "100px",
      render: (_, record) => (
        <div className="d-flex align-items-center justify-content-center gap-2">
          <Link to={"/dashboard/edit-user/" + record.id}>
            <Button
              className="d-flex align-items-center justify-content-center"
              type="primary"
              shape="circle"
              icon={<BiPen />}
            />
          </Link>
          <Button
            className="d-flex align-items-center justify-content-center"
            danger
            type="primary"
            shape="circle"
            icon={<AiTwotoneDelete />}
            onClick={() => removeUser(record.id as string)}
          />
        </div>
      ),
    },
  ];

  return (
    <Spin spinning={isLoading}>
      <div className="d-flex align-items-center justify-content-between">
        <h5> User List </h5>
        <Link to="add">
          {" "}
          <Button type="primary">Add User</Button>{" "}
        </Link>
      </div>
      <hr />
      {user?.success && Array.isArray(user?.data) ? (
        <Table columns={columns} dataSource={user?.data} />
      ) : (
        "No User Found"
      )}
    </Spin>
  );
};

export default Packages;
