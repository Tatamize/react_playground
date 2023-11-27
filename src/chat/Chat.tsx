import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client'; // Import socket.io-client as 'io'
import { Socket } from 'socket.io-client';
import "./chat.scss";

export const Chat: React.FC = () =>{
	const socket = useRef<Socket | null>(null);
	const form = useRef<HTMLFormElement | null>(null);
	const input = useRef<HTMLInputElement | null>(null);
	const messages = useRef<HTMLUListElement | null>(null);

	// useEffect runs after every render
	useEffect(() => {
		socket.current = io('http://localhost:3000');
	
		form.current?.addEventListener('submit', (e) => {
		  e.preventDefault();
		  if (input.current?.value) {
			socket.current?.emit('chat message', input.current.value);
			input.current.value = '';
		  }
		});
	
		socket.current?.on('chat message', (msg: string) => {
		  const item = document.createElement('li');
		  item.textContent = msg;
		  messages.current?.appendChild(item);
		  window.scrollTo(0, document.body.scrollHeight);
		});
	
		// If you return a function from the effect, it will be called when the component unmounts
		return () => {
		  socket.current?.disconnect();
		};
	  }, []);

	return (
		<>
			<h1>Let's start Chat!</h1>
			<div className='form_chat'>
      			<ul ref={messages}></ul>
      			<form ref={form}>
      				<input id="input" ref={input} />
      				<button type="submit">Send</button>
      			</form>
   			</div>
		</>
	);
};