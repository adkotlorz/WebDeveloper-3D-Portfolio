import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const Showcase = () => {
	const sectionRef = useRef(null);

	const projectOneRef = useRef(null);
	const projectTwoRef = useRef(null);
	const projectThreeRef = useRef(null);

	useGSAP(() => {
		const projects = [projectOneRef.current, projectTwoRef.current, projectThreeRef.current];

		gsap.fromTo(sectionRef.current, {
			opacity: 0
		}, {
			opacity: 1,
			duration: 1.5
		})

		projects.forEach((card, index) => {
			gsap.fromTo(card, {
				y: 50,
				opacity: 0,
			}, {
				y: 0,
				opacity: 1,
				duration: 1,
				delay: 0.3 * (index + 1),
				scrollTrigger: {
					trigger: card,
					start: "top bottom -= 100"
				}
			});
		});
	}, []);

	return (
		<section ref={sectionRef} id="work" className="app-showcase">
			<div className="w-full">
				<div className="showcaselayout">
					<div ref={projectOneRef} className="first-project-wrapper">
						<div className="image-wrapper">
							<img src="/images/project1.png" alt="ryde"/>
						</div>
						<div className="text-content">
							<h2>
								On-Demand Rides made simple with a Powerful, User-Friendly App called Ryde
							</h2>
							<p className="text-white-50 md:text-xl">
								An app built with React Native, Expo & TailwindCSS for a fast, user-friendly experience.
							</p>
						</div>
					</div>
					<div className="project-list-wrapper overflow-hidden">
						<div ref={projectTwoRef} className="project">
							<div className="image-wrapper bg-[#FFEFEB]">
								<img src="/images/project2.png" alt="Library Management" />
							</div>
							<h2>Library Management Platform</h2>
						</div>
						<div ref={projectThreeRef} className="project">
							<div className="image-wrapper bg-[#FFE7EB]">
								<img src="/images/project3.png" alt="YC Directory" />
							</div>
							<h2>YC Directory - A startup showcase App</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Showcase;