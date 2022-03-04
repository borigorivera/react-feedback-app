import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<Card>
			<div className="about">
				<h1>about this project</h1>
				<p>
					this is a react app to leave feecback for a product or
					service
				</p>
				<p>Version bla bla bla</p>
				<Link to="/">back to home</Link>
			</div>
		</Card>
	);
};

export default About;
