import Image from "next/image";

export default function Login() {
	return (
		<main className="h-screen">
			<div className="flex justify-between h-full">
				<div className="p-16 w-full">
					<h1 className="text-6xl border-b-2 w-fit">Login</h1>
					<div className="m-16">
						<div className="flex">
							<a
								className="text-white mx-auto"
								title="google"
								href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`}
							>
								<div className="px-8 py-4 bg-blue-500 rounded-lg">
									Login with google
								</div>
							</a>
						</div>
					</div>
				</div>
				<div className="w-1/2 max-h-screen relative">
					<Image
						className="rounded-bl-[300px] object-cover shadow-2xl"
						src="/koala.webp"
						alt="Login Banner"
						fill
						priority
					/>
				</div>
			</div>
		</main>
	);
}
