import React from "react";
import PackagesForm from "./PackagesForm";
import { useParams } from "react-router-dom";
import { useGetSingleUserQuery } from "../../../app/features/users/userApi";

const EditPackages = () => {
  const { id } = useParams();
  const { data } = useGetSingleUserQuery(id as string);
  return <div>{data?.success && <PackagesForm mode="edit" data={data?.data} />}</div>;
};

export default EditPackages;
