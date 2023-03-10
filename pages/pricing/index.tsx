import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function PricingPage() {
  return (
    <>
      <MainLayout>
        <h1 className="code">Pricing Page</h1>
        <h1 className="code">
          Ir a <Link href="/">Home</Link>
          {/* Ir a <a href="/">Home</a> */}
        </h1>
        <div className="description">
          <p>
            Get started by editing&nbsp;
            <code className="code">pages/pricing.jsx</code>
          </p>
        </div>
      </MainLayout>
    </>
  );
}
