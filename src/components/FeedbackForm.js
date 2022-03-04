import React, { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import Rating from "./Rating";
import { v4 as uuidv4 } from "uuid";

import FeedbackContext from "./context/FeedbackContext";

const FeedbackForm = () => {
	const [text, setText] = useState("");
	const [rating, setRating] = useState(10);
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState("");

	const { handleAdd, feedbackEdit, handleUpdate } =
		useContext(FeedbackContext);

	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setBtnDisabled(false);
			setText(feedbackEdit.item.text);
			setRating(feedbackEdit.item.rating);
		}
	}, [feedbackEdit]);

	const handleChange = (e) => {
		if (text === "") {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== "" && text.trim().length <= 10) {
			setBtnDisabled(true);
			setMessage("text must be at least 10 characters");
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}
		setText((prev) => setText(e.target.value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating,
				id: uuidv4(),
			};

			if (feedbackEdit.edit === true) {
				handleUpdate(feedbackEdit.item.id, newFeedback);
			} else {
				handleAdd(newFeedback);
			}

			setText("");
		}
	};

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>how would you rate your service with us?</h2>
				<Rating setRating={setRating} />
				<div className="input-group">
					<input
						onChange={handleChange}
						type="text "
						placeholder="write a review"
						value={text}
					/>
					<Button type="submit" isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div>{message}</div>}
			</form>
		</Card>
	);
};

export default FeedbackForm;
