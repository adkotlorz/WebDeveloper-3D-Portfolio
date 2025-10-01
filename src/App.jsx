import { Experience, FeatureCards, Hero, LogoSection, Showcase } from "./sections/index.js";
import { Navbar } from "./components/index.js";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Showcase />
			<LogoSection />
			<FeatureCards />
			<Experience />
		</>
	);
};

export default App;