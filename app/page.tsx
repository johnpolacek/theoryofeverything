import Header from "./_components/Header"
import Sidebar from "./_components/Sidebar"
import Content from "./_components/Content"
import Footer from "./_components/Footer"

export default function Home() {
  return (
    <div className="xl:grid grid-cols-[1fr_5fr] justify-stretch w-full max-w-[1280px] overflow-hidden mx-auto">
      <Sidebar />
      <div className="grow h-screen overflow-auto">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  )
}
