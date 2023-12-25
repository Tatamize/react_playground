import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client'; // Import socket.io-client as 'io'
import { Socket } from 'socket.io-client';
import { useParams } from "react-router-dom";


export function Chat(){
	const { roomid } = useParams<{roomid :string}>(); 
	const chat_socket = useRef<Socket | null>(null);
	const chat_form = useRef<HTMLFormElement | null>(null);
	const chat_text = useRef<HTMLTextAreaElement | null>(null);
	const chat_messages = useRef<HTMLUListElement | null>(null);

	let userIdVal :string = "1"; // dummy ID, call API later

	// useEffect invokes the side effects.
	// The first argument is a function contains the side effects
	// If the second argument is [], the side effects is called only once.
	useEffect(() => {

		// [need API] check this if this userIdVal can access this roomid 

		// create a socket running on WebSocket protocol
		chat_socket.current = io('http://localhost:3333');

		// This is the default event of chat_socket.io to do something(one time) at the connection
		chat_socket.current.on("connect", () => {
			console.log(chat_socket.current?.id);
			chat_socket.current?.emit('join a room' , [roomid, userIdVal]);
		});

		// default event on disconnection
		chat_socket.current.on("disconnect", () => {
			// ! can't emit message anymore here
		});
		
		// 'chat message' event (to server) : submit message
		chat_form.current?.addEventListener('submit', (e) => {
		e.preventDefault();
		if (chat_text.current?.value) {
			chat_socket.current?.emit('chat message' , [roomid, userIdVal, chat_text.current.value]);	
			chat_text.current.value = '';
		}
		});
		
		// 'chat message' event (from server)
		// [string, string] = [userID, message]
		chat_socket.current?.on('chat message' , (msg: [string, string]) => {
		let chatbox = document.getElementById('chat_inner');
		const wrap = document.createElement('div');
		const item = document.createElement('div');
		const user = document.createElement('span');
		if (msg[0] == userIdVal)
			wrap.setAttribute("class", "my_dialog");
		user.textContent =( msg[0] == userIdVal ? "you" : msg[0] );
		item.textContent = msg[1];
		wrap.appendChild(user);
		wrap.appendChild(item);
		chat_messages.current?.appendChild(wrap);
		window.scrollTo(0, document.body.scrollHeight);
		chatbox?.scrollIntoView({block: "end", inline: "nearest"});
		});
		
		// 'general' event (from server) : to show who is in this room
		chat_socket.current?.on('general' , (msg: string) => {
			let messe = document.getElementById('message_general');
			const wrap = document.createElement('div');
			wrap.textContent = msg;
			messe?.appendChild(wrap);
		});

		// For layout (to check area size)
		let chatbox = document.getElementById('chat_form');
		let chatplace = chatbox?.getBoundingClientRect();
		let chatposition = chatplace?.top;
		let chatheight = Math.trunc(window.innerHeight - (chatposition ? chatposition : 0) - 250);
		if (chatbox)
			chatbox.style.height = (chatheight > 100 ? chatheight : 100) + "px";
		

		// If you return a function from the effect, it will be called when the component unmounts
		return () => {
			// actually not needed
			chat_socket.current?.disconnect();
		};
	  }, []);

	return (
		<>
			<h1>Let's start Chat! {userIdVal}</h1>
			<div id="message_general"></div>
			<div className='chat_form' id='chat_form'>
      			<section ref={chat_messages} id="chat_inner"></section>

   			</div>
			<form ref={chat_form} id='form_submit'>
      			<textarea id="chat_input" ref={chat_text} />
      			<button type="submit">Send</button>
      		</form>
		</>
	);
};