import Content from "@/app/_components/Content";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import PageTransition from "@/app/_components/PageTransition";
import Sidebar from "@/app/_components/Sidebar";

export default function Home() {
  return (
    <div className="xl:grid grid-cols-[1fr_5fr] justify-stretch w-full max-w-[1280px] overflow-hidden mx-auto h-screen">
      <Sidebar />
      <div className="grow h-full overflow-auto">
        <Header />
        <PageTransition>
          <Content />
        </PageTransition>
        <Footer />
      </div>
    </div>
  );
}
