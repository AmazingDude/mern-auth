import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { toast } from "sonner";
import axios from "axios";

const Login = () => {
	const navigate = useNavigate();

	const { backendUrl, setIsLoggedIn, getUserData } = useContext(AppContext);

	const [state, setState] = useState("Sign up");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const SubmitHandler = async (e) => {
		try {
			e.preventDefault();

			axios.defaults.withCredentials = true;

			if (state === "Sign up") {
				const { data } = await axios.post(backendUrl + "/api/auth/register", {
					name,
					email,
					password,
				});

				if (data.success) {
					setIsLoggedIn(true);
					getUserData();
					navigate("/");
				} else {
					toast.error(data.message);
				}
			} else {
				const { data } = await axios.post(backendUrl + "/api/auth/login", {
					email,
					password,
				});

				if (data.success) {
					setIsLoggedIn(true);
					getUserData();
					navigate("/");
				} else {
					toast.error(data.message);
				}
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<section className="flex items-center justify-center min-h-screen px-6 sm:px-0 ">
			<img
				src={assets.logo}
				alt=""
				className="absolute left-5 sm:left-20 top-5 sm:w-32 cursor-pointer"
				onClick={() => navigate("/")}
			/>
			<div className="bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-200 text-sm">
				<h2 className="text-3xl font-semibold text-white text-center mb-3">
					{state === "Sign up" ? "Create Account" : "Login"}
				</h2>
				<p className="text-center text-sm mb-6">
					{state === "Sign up" ? "Create an account" : "Login to your account"}
				</p>
				<form onSubmit={SubmitHandler}>
					{state === "Sign up" && (
						<div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-gray-700">
							<img src={assets.person_icon} alt="" />
							<input
								className="text-gray-300 outline-none w-full"
								type="text"
								placeholder="Enter your Name"
								required
								onChange={(e) => setName(e.target.value)}
								value={name}
							/>
						</div>
					)}

					<div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-gray-700">
						<img src={assets.mail_icon} alt="" />
						<input
							className="text-gray-300 outline-none w-full"
							type="email"
							placeholder="Enter your Email"
							required
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</div>
					<div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-gray-700">
						<img src={assets.lock_icon} alt="" />
						<input
							className="text-gray-300 outline-none w-full"
							type="password"
							placeholder="Enter a Password"
							required
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
					</div>
					<p
						className="mb-4 text-indigo-500 cursor-pointer"
						onClick={() => navigate("/reset-password")}
					>
						Forgot Password?
					</p>
					<button className="w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium cursor-pointer">
						{state}
					</button>
				</form>
				{state === "Sign up" ? (
					<p className="text-gray-400 text-center text-xs mt-4">
						Already have an account?{" "}
						<span
							className="text-blue-400 cursor-pointer underline"
							onClick={() => setState("Login")}
						>
							Login Here
						</span>
					</p>
				) : (
					<p className="text-gray-400 text-center text-xs mt-4">
						Don't have an account?{" "}
						<span
							className="text-blue-400 cursor-pointer underline"
							onClick={() => setState("Sign up")}
						>
							Sign up
						</span>
					</p>
				)}
			</div>
		</section>
	);
};

export default Login;
