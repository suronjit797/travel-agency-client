import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const ProtectedRoute = ({ children }) => {
  const { data, status } = useSession();
  const router = useRouter();

  console.log(status);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [data, status, router]);

  if (status === "loading") {
    return <p> Loading ...</p>;
  }

  return data ? <>{children}</> : null;
};

export default ProtectedRoute;
