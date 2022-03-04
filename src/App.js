import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";

import About from "./pages/About";

import { FeedbackProvider } from "./components/context/FeedbackContext";

function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className="container">
					<Routes>
						<Route
							exact
							path="/"
							element={
								<>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
									<AboutIconLink />
								</>
							}
						></Route>
						<Route path="/about" element={<About />}></Route>
					</Routes>
				</div>
			</Router>
		</FeedbackProvider>
	);
}

export default App;
