import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import PortfolioItem from "../components/PortfolioItem";
import projects from "../data/projects";
import "./Portfolio.scss";

const Portfolio = (props) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 950 },
			items: 3,
			slidesToSlide: 1,
		},
		tablet: {
			breakpoint: { max: 949, min: 600 },
			items: 2,
			slidesToSlide: 1,
		},
		mobile: {
			breakpoint: { max: 599, min: 0 },
			items: 1,
			slidesToSlide: 1,
		},
	};

	return (
		<section id="portfolio">
			<h2>Let´s see some of my projects:</h2>
			<Carousel
				swipeable={true}
				draggable={false}
				showDots={false}
				responsive={responsive}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={3000}
				keyBoardControl={true}
				customTransition="transform 500ms ease-in-out"
				transitionDuration={500}
				containerClass="carousel-container"
				removeArrowOnDeviceType={[]}
				itemClass="carousel-item"
				renderDotsOutside={false}
				centerMode={false}
			>
				{projects.map((project) => (
					<PortfolioItem key={project.name} project={project} />
				))}
			</Carousel>
		</section>
	);
};

export default Portfolio;
