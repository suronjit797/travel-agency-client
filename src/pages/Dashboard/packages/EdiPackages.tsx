import React from "react";
import PackagesForm from "./PackagesForm";
import { useParams } from "react-router-dom";
import { useGetSinglePackageQuery } from "../../../app/features/packages/packagesApi";

const EditPackages = () => {
  const { id } = useParams();
  const { data } = useGetSinglePackageQuery(id as string);
  return <div>{data?.success && <PackagesForm mode="edit" data={data?.data} />}</div>;
};

export default EditPackages;
