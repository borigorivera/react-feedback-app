import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: "this item is from context",
			rating: 10,
		},
		{
			id: 2,
			text: "this item is from context",
			rating: 10,
		},
		{
			id: 3,
			text: "this item is from context",
			rating: 10,
		},
	]);

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	const handleAdd = (newFeedback) => {
		setFeedback([newFeedback, ...feedback]);
	};

	const handleRemove = (id) => {
		setFeedback((prev) => {
			return prev.filter((item) => item.id !== id);
		});
	};

	const handleEdit = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	const handleUpdate = (id, updatedItem) => {
		setFeedback(
			feedback.map((item) =>
				item.id === id ? { ...item, ...updatedItem } : item
			)
		);
		setFeedbackEdit({ item: "", edit: false });
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				handleRemove,
				handleAdd,
				handleEdit,
				feedbackEdit,
				handleUpdate,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
