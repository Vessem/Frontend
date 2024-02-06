'use client'

import {Permission} from "@/types/Permission";
import Button from "@/components/Button";

export default function Navbar() {

	const pages = [
		{
			name: 'Home',
			route: '/',
			permission: undefined
		},
		{
			name: 'Dashboard',
			route: '/dashboard',
			permission: Permission.USER
		}
	]

	return (
		<nav className='flex bg-white border-b-2 py-2 px-16 h-14 justify-between'>
			<div>
				{pages.map((pages, index) => {
					// TODO: Implement permissions

					return (
						<Button key={index} title={pages.name} onClick={() => window.location.pathname = pages.route}/>
					)
				})}
			</div>
			<div>
				<Button title='Login' onClick={() => window.location.pathname = '/login'}/>
			</div>
		</nav>
	);
}