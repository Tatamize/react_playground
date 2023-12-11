import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";
import "./chatroom.scss";

interface ChatRoom {
	id: number;
	title: string;
	owner: string;
}

// dummy data (later use API)//
const room1 : ChatRoom = {
	id : 1,
	title : "myroom",
	owner : "me"
}

const room2 : ChatRoom = {
	id : 2,
	title : "yourroom",
	owner : "you"
}
// dummy data end //

// Call API to get the active rooms data
// Check if this user is not banned to access this room

export function ChatRoom({userIdVal} : {userIdVal:string}){
	const [rooms, setRooms] = useState<ChatRoom[] | null>(null);

	useEffect(() => {
		// later use API and set the room data
		setRooms([room1, room2]);
	}, []);

	return (
		<>
			<div id="room_item">
			{
				rooms?.map((i) => (
					<Link to={'/chatroom/'+ i.id}>{i.title}</Link>		
				))
			}
			</div>	
		</>
	);
};