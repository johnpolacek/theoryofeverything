import Content from "./_components/Content";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

export default function Home() {
  return (
    <div className="xl:grid grid-cols-[1fr_5fr] justify-stretch w-full max-w-[1280px] overflow-hidden mx-auto h-screen">
      <Sidebar />
      <div className="grow h-full overflow-auto">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
