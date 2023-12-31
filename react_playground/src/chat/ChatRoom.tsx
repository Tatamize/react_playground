import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";


interface ChatRoomProps {
	id: number;
	title: string;
	owner: string;
}

// dummy data (later use API)//
const room1 : ChatRoomProps = {
	id : 1,
	title : "myroom",
	owner : "me"
}

const room2 : ChatRoomProps = {
	id : 2,
	title : "yourroom",
	owner : "you"
}
// dummy data end //

// Call API to get the active rooms data
// Check if this user is not banned to access this room

export function ChatRoom(){
	const [rooms, setRooms] = useState<ChatRoomProps[] | null>(null);
	const chatroom_form = useRef<HTMLFormElement | null>(null);
	const chatroom_input = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		// later use API and set the room data
		setRooms([room1, room2]);
	}, []);

	// 'chat message' event (to server) : submit message
	chatroom_form.current?.addEventListener('submit', (e) => {
		e.preventDefault();
		if (chatroom_input.current?.value) {
			// call API and make a new room
			chatroom_input.current.value = '';
		}
	});

	return (
		<>
			<div id="room_item">
			{
				rooms?.map((i) => (
					<Link to={'/chatroom/'+ i.id} key={i.title}>{i.title}</Link>		
				))
			}
			</div>
			<p>Make a new room?</p>
			<form ref={chatroom_form} id="make_new_room">	
				<input ref={chatroom_input}></input>
				<button type="submit">Make</button>
			</form>
		</>
	);
};