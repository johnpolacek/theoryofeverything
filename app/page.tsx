import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import Content from "./_components/Content";
import Footer from "./_components/Footer"

export default function Home() {
	return (
		<div className="flex">
			<Sidebar />
			<div className="grow">
				<Header />
				<Content />
				<Footer />
			</div>
		</div>
	);
}
