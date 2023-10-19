import Layout from "../../layout/Layout";
import HomeBanner from "./HomeBanner";
import HomePackages from "./HomePackages";

export default function Home() {
  return (
    <Layout title="Home">
      <HomeBanner />
      <HomePackages />
    </Layout>
  );
}
