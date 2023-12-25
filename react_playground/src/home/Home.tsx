import React from "react";

// import {ApiCall} from "./ApiCall"; 
import {ListAccount} from "../common/ListAccount"; 

export const Home = () => {
  return (
    <>
      <h1>Playground for ft_transcendence</h1>
      <p>
        This is a playground for making a SPA (PONG game and chat) with{" "}
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >React</a>,{" "}
        <a
          className="app-link"
          href="https://nestjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >Nest.js</a>,{" "}
        <a
          className="app-link"
          href="https://www.prisma.io/"
          target="_blank"
          rel="noopener noreferrer"
        >prisma.io</a>,{" "}
        <a
          className="app-link"
          href="https://threejs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >three.js</a>,{" "}
        <a
          className="app-link"
          href="https://socket.io//"
          target="_blank"
          rel="noopener noreferrer"
        >socket.io</a>, <br />
        and maybe extra.
      </p>
      {/* <h2>What is ft_transcendence? </h2>
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
      </p> */}

			<ListAccount />
    </>
  );
};
