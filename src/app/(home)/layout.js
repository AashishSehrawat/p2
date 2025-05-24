import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function HomeLayout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}
