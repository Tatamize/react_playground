import React from "react";
import {ApiCall} from "./ApiCall"; 

export const Home = () => {
  return (
    <>
      <h1>Welcome to Playground for ft_transcendence</h1>
      <p>
        This is a playground for learning{" "}
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >React</a>, <br />
        and preparing for ft_transcendence.
      </p>
      <h2>What is ft_transcendence? </h2>
      <p>
        "ft_transcendence" is the last project of Codam's core curriculum. <br />
				<a href="https://www.codam.nl/" rel="noreferrer" target="_blank">Codam</a> is a full-time coding school part of the worldwide <a href="https://www.42network.org/" target="_blank">42 network</a>. 
				The curricuram starts from writing C programs, students learn also bash,
        Git, network protocols, algorism, computer graphics... a wide range of
        CS basic through the unique projects. Some projects are team task,
        students tackle to a difficult program (like making 3D maze game, making
        a web server, etc) by cooperating with teammates.
      </p>
      <p>
        This final program is a SPA contains PONG game, user management, and chat. 
				We make it with Typescript, using Nest.js and postgreSQL is mandatoly. 
				We can also incorporate other frameworks. Before making 'ft_transcendence', 
				we learn C++, Docker, and DB, but the final boss is... yes, javascript.
      </p>
      <h3>About this website</h3>
      <p>
        This website is made for experiment. Our team consists of 3 highly
        motivated students. This is one of test tools to understand how to make a SPA.
      </p>

			<ApiCall />
    </>
  );
};
