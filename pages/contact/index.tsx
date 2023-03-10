import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function ContactPage() {
  return (
    <>
      <MainLayout>
        <h1 className="code">Contact Page</h1>
        <h1 className="code">
          Ir a <Link href="/about">About</Link>
          {/* Ir a <a href="/">Home</a> */}
        </h1>
        <div className="description">
          <p>
            Get started by editing&nbsp;
            <code className="code">pages/contact.jsx</code>
          </p>
        </div>
      </MainLayout>
    </>
  );
}
