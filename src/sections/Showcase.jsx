const Showcase = () => {
	return (
		<div id="work" className="app-showcase">
			<div className="w-full">
				<div className="showcaselayout">
				{/*	Left side */}
					<div className="first-project-wrapper">
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
				{/*	Right side*/}
					<div className="project-list-wrapper overflow-hidden">
						<div className="project">
							<div className="image-wrapper bg-[#FFEFEB]">
								<img src="/images/project2.png" alt="Library Management" />
							</div>
							<h2>Library Management Platform</h2>
						</div>
						<div className="project">
							<div className="image-wrapper bg-[#FFE7EB]">
								<img src="/images/project3.png" alt="YC Directory" />
							</div>
							<h2>YC Directory - A startup showcase App</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Showcase;