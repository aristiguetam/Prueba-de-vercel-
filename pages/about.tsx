import { Inter } from "next/font/google";
import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";

const inter = Inter({ subsets: ["latin"] });

export default function AboutPage() {
  return (
    <>
      <h1 className="code">About Page</h1>
      <h1 className="code">
        Ir a <Link href="/contact">Contact</Link>
        {/* Ir a <a href="/">Home</a> */}
      </h1>
      <div className="description">
        <p>
          Get started by editing&nbsp;
          <code className="code">pages/about.jsx</code>
        </p>
      </div>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
