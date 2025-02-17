import Footer from "@components/Footer";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}