import React from "react";
import { Link } from "react-router-dom";
import logo from './img/logo.svg';

export const Mainnav: React.FC = () =>{
	return (
		<>
		<header className="main-navi">
        <img src={logo} className="react-logo" alt="logo" />
		<span>playground for ft_transcendence</span>
        <div><Link to="/">Home</Link><Link to="/chatroom">Chat</Link><Link to="/game">Game</Link></div>
      	</header>
		</>
	);
};