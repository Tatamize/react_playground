// This file is just for checking if React structure can include js (not TypeScript)
import React, { useState, useEffect, useRef } from "react";


export const Jstest = () =>{

	useEffect(() => {



	}, []);

	return (
		<>
			<h1>Test to read js!</h1>
			<p>Hello</p>
		</>
	);
};