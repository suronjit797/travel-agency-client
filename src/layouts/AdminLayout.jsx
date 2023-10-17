import Link from "next/link";
import styles from "@/styles/AdminLayout.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AdminLayout = ({ children }) => {
  const { data, status } = useSession();
  const session = data?.token;
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (session?.role !== "admin" || session?.role !== "superAdmin") {
      router.push("/");
    }
  }, [session, router]);

  if (status === "loading") {
    return <p> Loading ...</p>;
  }

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/admin">
              <h3 className="mb-0 text-center fw-bold mt-2"> Admin </h3>
            </Link>
          </li>
          <hr className="my-1 border-white" />

          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/admin/dashboard">
              Dashboard
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/admin/users">
              Users
            </Link>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
      <main className={styles.content}>
        {children}
        <hr className="mt-auto" />
        <footer className="text-center">
          {new Date().getFullYear()} &copy; All right reserve by suronjit pal
        </footer>
      </main>
    </div>
  );
};

export default AdminLayout;
