import ProtectedRoute from "@/components/ProtectedRoute";
import Layout from "@/layouts/Layout";

export default function Home() {
  return (
    <ProtectedRoute>
      <Layout title="Home"> home </Layout>
    </ProtectedRoute>
  );
}
