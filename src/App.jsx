import {
	Experience,
	FeatureCards,
	Hero,
	LogoSection,
	Showcase,
	TechStack,
	Testimonials
} from "./sections/index.js";
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
			<TechStack />
			<Testimonials />
		</>
	);
};

export default App;