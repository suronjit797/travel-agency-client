import React from "react";
import UserForm from "./UserForm";
import { useParams } from "react-router-dom";
import { useGetSingleUserQuery } from "../../../app/features/users/userApi";

const EditUser = () => {
  const { id } = useParams();
  const { data } = useGetSingleUserQuery(id as string);
  return <div>{data?.success && <UserForm mode="edit" data={data?.data} />}</div>;
};

export default EditUser;
