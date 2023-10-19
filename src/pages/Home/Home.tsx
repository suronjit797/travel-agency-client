import Layout from "../../layout/Layout";
import HomeBanner from "./HomeBanner";
import Packages from "./Packages";

export default function Home() {
  return (
    <Layout title="Home">
      <HomeBanner />
      <Packages />
    </Layout>
  );
}
