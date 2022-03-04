import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";

import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

const FeedbackItem = ({ item }) => {
	const { handleRemove, handleEdit } = useContext(FeedbackContext);
	return (
		<Card>
			<div className="num-display">{item.rating}</div>
			<button onClick={() => handleRemove(item.id)} className="close">
				<FaTimes color="purple" />
			</button>
			<button onClick={() => handleEdit(item)} className="edit">
				<FaEdit color="purple" />
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	);
};

export default FeedbackItem;
