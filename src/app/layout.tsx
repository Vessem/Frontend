import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import React from "react";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {CookiesProvider} from "next-client-cookies/server";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Vessem",
	description: "Learn languages with Vessem!",
};

export default function RootLayout({
	                                   children,
                                   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body className={inter.className}>
		<CookiesProvider>
			<Navbar/>
			<ToastContainer/>
			{children}
		</CookiesProvider>
		</body>
		</html>
	);
}
