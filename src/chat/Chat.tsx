import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client'; // Import socket.io-client as 'io'
import { Socket } from 'socket.io-client';
import { useParams } from "react-router-dom";
import "./chat.scss";


export function Chat({userIdVal} : {userIdVal : string}){
	const { roomid } = useParams<{roomid :string}>(); 
	const socket = useRef<Socket | null>(null);
	const form = useRef<HTMLFormElement | null>(null);
	const input = useRef<HTMLTextAreaElement | null>(null);
	const messages = useRef<HTMLUListElement | null>(null);


	// useEffect invokes the side effects.
	// The first argument is a function contains the side effects
	// If the second argument is [], the side effects is called only once.
	useEffect(() => {

		// [need API] check this if this userIdVal can access this roomid 

		// create a socket running on WebSocket protocol
		socket.current = io('http://localhost:3000');

		// This is the default event of socket.io to do something(one time) at the connection
		socket.current.on("connect", () => {
			console.log(socket.current?.id);
			socket.current?.emit('join a room' , [roomid, userIdVal]);
		});

		// default event on disconnection
		socket.current.on("disconnect", () => {
			// ! can't emit message anymore here
		});
		
		// 'chat message' event (to server) : submit message
		form.current?.addEventListener('submit', (e) => {
		e.preventDefault();
		if (input.current?.value) {
			socket.current?.emit('chat message' , [roomid, userIdVal, input.current.value]);	
			input.current.value = '';
		}
		});
		
		// 'chat message' event (from server)
		// [string, string] = [userID, message]
		socket.current?.on('chat message' , (msg: [string, string]) => {
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
		messages.current?.appendChild(wrap);
		window.scrollTo(0, document.body.scrollHeight);
		chatbox?.scrollIntoView({block: "end", inline: "nearest"});
		});
		
		// 'general' event (from server) : to show who is in this room
		socket.current?.on('general' , (msg: string) => {
			let messe = document.getElementById('message_general');
			const wrap = document.createElement('div');
			wrap.textContent = msg;
			messe?.appendChild(wrap);
		});

		// For layout (to check area size)
		let chatbox = document.getElementById('form_chat');
		let chatplace = chatbox?.getBoundingClientRect();
		let chatposition = chatplace?.top;
		let chatheight = Math.trunc(window.innerHeight - (chatposition ? chatposition : 0) - 250);
		if (chatbox)
			chatbox.style.height = (chatheight > 100 ? chatheight : 100) + "px";
		

		// If you return a function from the effect, it will be called when the component unmounts
		return () => {
			// actually not needed
			socket.current?.disconnect();
		};
	  }, []);

	return (
		<>
			<h1>Let's start Chat! {userIdVal}</h1>
			<div id="message_general"></div>
			<div className='form_chat' id='form_chat'>
      			<section ref={messages} id="chat_inner"></section>

   			</div>
			<form ref={form} id='form_submit'>
      			<textarea id="chat_input" ref={input} />
      			<button type="submit">Send</button>
      		</form>
		</>
	);
};