import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export default function Button(props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) {
	return (
		<button onClick={props.onClick}
		        className={`${props.className} whitespace-nowrap hover:bg-gray-200 cursor-pointer rounded-md px-3 py-2 text-sm font-medium`}>{props.title}</button>
	)
} 