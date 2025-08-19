import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Header = () => {
	const { userData } = useContext(AppContext);

	return (
		<header className="flex flex-col items-center mt-20 px-4 text-center text-neutral-800">
			<img
				src={assets.header_img}
				alt=""
				className="w-36 h-36 rounded-full mb-6"
			/>
			<h1 className="flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2">
				Hey {userData ? userData.name : "Developer"}!
				<span className="text-3xl">👋</span>
			</h1>
			<h2 className="text-3xl sm:text-5xl font-semibold mb-4">Welcome back!</h2>
			<p className="mb-8 max-w-md">
				Take a moment, settle in, and get ready to dive back into your ideas.
			</p>
			<button className="bg-neutral-900 text-neutral-50 rounded-full px-8 py-2.5 border border-black hover:bg-neutral-50 hover:text-neutral-800 hover:shadow-md hover:border hover:border-neutral-200 cursor-pointer transition duration-150">
				Get Started
			</button>
		</header>
	);
};

export default Header;
