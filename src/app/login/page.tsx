'use client'
import Image from "next/image";
import Button from "@/components/Button";

export default function Login() {
	
	return (
		<main className="h-screen">
			<div className='flex justify-between h-full'>
				<div className='p-16 w-full'>
					<h1 className='text-6xl border-b-2 w-fit'>Login</h1>
					<div className='m-16'>
						<Button title='Sign in with google' />
					</div>
				</div>
				<div className='w-1/2 max-h-screen relative'>
					<Image className='rounded-bl-[300px] object-cover shadow-2xl' src='/koala.webp' alt='Login Banner' fill priority />
				</div>
			</div>
		</main>
	);
}
