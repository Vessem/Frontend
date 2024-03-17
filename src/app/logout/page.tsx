"use client";
import {useCookies} from "next-client-cookies";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function Logout() {
	const cookies = useCookies();
	const router = useRouter();

	useEffect(() => {
		if (cookies.get("loggedIn") === "true") {
			cookies.set("loggedIn", "false");
			window.location.pathname = "/"; // Use window.location instead of router due to router not rendering the navbar again
		}
	}, [router, cookies]);

	return;
}
