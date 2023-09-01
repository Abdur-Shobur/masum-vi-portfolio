export interface IButton {
	text: string;
	icon?: boolean;
	action?: Function;
	type?: 'button' | 'submit';
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
}
