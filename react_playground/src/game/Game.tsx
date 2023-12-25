import React, { useState, useEffect, useRef } from "react";
import io from 'socket.io-client'; // Import socket.io-client as 'io'
import { Socket } from 'socket.io-client';


export const Game = () =>{
	const name = useRef<number | null>(0);		// to store the user name (1 or 2 :provided by server)
	const socket = useRef<Socket | null>(null);	// Socket instance reference

	useEffect(() => {
		socket.current = io('http://localhost:8080');

		if (socket == null)
			console.log("not connected!");

		// This is the default event of socket.io doing something at the socket connection
		socket.current.on("connect", () => {
			console.log("joined!");
		});

		// get 'get name' event (from server) 
		socket.current?.on('get name' , (msg: number) => {
			name.current = msg; // set name (1 or 2)
			let myname_div = document.getElementById('myname');
			const wrap = document.createElement('div');
			wrap.textContent = "I'm " + msg;
			console.log("got name" + msg);
			myname_div?.appendChild(wrap); // show name on the browser
		});

		// send 'move paddle' event (to server) 
		document.addEventListener('keydown', event => {
			if (event.code === 'ArrowUp') {
				socket.current?.emit('move paddle' , [name.current, 5]);
			}
			if (event.code === 'ArrowDown') {
				socket.current?.emit('move paddle' , [name.current, -5]);
			}
		});

		// get 'move paddle' event (from server)
		socket.current?.on('move paddle' , (pos: [number, number]) => {
			let player_a = document.getElementById('player_a');
			let player_b = document.getElementById('player_b');

			if (player_a && pos[0] == 1)
				player_a.style.bottom = pos[1] + "%";
			if (player_b && pos[0] == 2)
				player_b.style.bottom = pos[1] + "%";
		});

	}, []);

	return (
		<>
			<h1>Let's start Game!</h1>
			<div id='myname'></div>
			<div id="game_screen">
				<div id="player_a"></div>
				<div id="player_b"></div>
			</div>
		</>
	);
};