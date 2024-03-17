"use client";
import {Permission} from "@/types/Permission";
import Button from "@/components/Button";
import {useCookies} from "next-client-cookies";
import {useRouter} from "next/navigation";

export default function Navbar() {
	const cookies = useCookies();
	const router = useRouter();
	const pages = [
		{
			name: "Home",
			route: "/",
			permission: undefined,
		},
		{
			name: "Dashboard",
			route: "/dashboard",
			permission: Permission.USER,
		},
	];

	return (
		<nav className="flex bg-white border-b-2 py-2 px-16 h-14 justify-between">
			<div>
				{pages.map((pages, index) => {
					// TODO: Implement permissions

					return (
						<Button
							key={index}
							title={pages.name}
							onClick={() => router.push(pages.route)}
						/>
					);
				})}
			</div>
			<div>
				{cookies.get("loggedIn") === "true" ? (
					<Button
						title="Logout"
						onClick={() =>
							(window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`)
						}
					/>
				) : (
					<Button title="Login" onClick={() => router.replace("/login")}/>
				)}
			</div>
		</nav>
	);
}
