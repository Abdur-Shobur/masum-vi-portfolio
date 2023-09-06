import React from 'react';
type IInput = {
	placeholder: string;
};
function Input2({ placeholder }: IInput) {
	return (
		<input
			className="w-full text-gray-900 bg-blue-50 mt-2 p-3 rounded-xl focus:outline-none focus:shadow-outline "
			type="text"
			placeholder={placeholder}
		/>
	);
}

export default Input2;
