import React, { useEffect, useRef } from "react";
import "./Chats.css";

const Chats = ({ messages }) => {
	const chatsRef = useRef();
	const scrollToBottom = () => {
		chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);
	return (
		<div className="Chats" ref={chatsRef}>
			{messages.map((message) => (
				<Chat message={message} key={message.number} />
			))}
		</div>
	);
};

const Chat = ({ message }) => {
	const { text, is_user_msg, number } = message;
	const handleclicks = (num, user_msg) => {
		console.log(user_msg);
		console.log(num);
	};
	return (
		<span
			className={`Chat ${is_user_msg ? "is_user_msg" : ""}`}
			onClick={handleclicks.bind(null, number, is_user_msg)}
		>
			{text}
		</span>
	);
};
export default Chats;
