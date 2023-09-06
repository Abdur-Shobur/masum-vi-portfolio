import { MouseEvent } from 'react';

export interface IButton {
	text: string;
	icon?: boolean;
	action?: Function;
	type?: 'button' | 'submit';
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface IInput {
	label: string;
	type?: 'text' | 'number' | 'email';
	placeholder?: string;
	name: string;
}

export interface IButtonIco {
	Icon: any;
	text: string;
	link?: string;
	type?: 'submit' | 'button';
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
