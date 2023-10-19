import React from "react";
import { Space, Table, Tag, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Spin } from "antd";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiPen } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  useGetPackageQuery,
  useRemovePackageMutation,
} from "../../../app/features/packages/packagesApi";
import { IPackage } from "../../../interface/packageInterface";

const Packages = () => {
  const { data: packages, isLoading } = useGetPackageQuery("");
  const [removePackage] = useRemovePackageMutation();

  const columns: ColumnsType<Partial<IPackage>> = [
    {
      title: "No",
      dataIndex: "no",
      render: (_, data, ind) => ind + 1,
      width: "60px",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Destination",
      dataIndex: "destination",
      key: "destination",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      width: "100px",
      render: (_, record) => (
        <div className="d-flex align-items-center justify-content-center gap-2">
          <Link to={"/dashboard/edit-packages/" + record.id}>
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
            onClick={() => removePackage(record.id as string)}
          />
        </div>
      ),
    },
  ];

  return (
    <Spin spinning={isLoading}>
      <div className="d-flex align-items-center justify-content-between">
        <h5> Packages List </h5>
        <Link to="add">
          {" "}
          <Button type="primary">Add packages</Button>{" "}
        </Link>
      </div>
      <hr />
      {packages?.success && Array.isArray(packages?.data) ? (
        <Table columns={columns} dataSource={packages?.data} />
      ) : (
        "No User Found"
      )}
    </Spin>
  );
};

export default Packages;
