import React from "react";
import { Card, Rate } from "antd";
import { useGetPackageQuery } from "../../app/features/packages/packagesApi";
import backgroundImage from "../../assets/images/packages.webp";

const { Meta } = Card;

const HomePackages = () => {
  const { data: packages } = useGetPackageQuery("limit=3");
  return (
    <div
      style={{
        // minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row my-5">
          {packages?.success && Array.isArray(packages?.data)
            ? packages?.data?.map((p:any) => (
                <div className="col-md-4">
                  <Card hoverable cover={<img alt="example" src={p.image} />}>
                    <Meta title={p.title} description={p.destination} />
                    <Rate disabled defaultValue={Number(p?.rate)} />
                  </Card>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default HomePackages;
