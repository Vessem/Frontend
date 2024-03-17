"use client";
import {useCookies} from "next-client-cookies";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function Success() {
	const cookies = useCookies();
	const router = useRouter();

	useEffect(() => {
		if (cookies.get("loggedIn") === "false") {
			cookies.set("loggedIn", "true");
			window.location.pathname = "/"; // Use window.location instead of router due to router not rendering the navbar again
		}
	}, [router, cookies]);

	return;
}
