// import * as ReactIcons from 'react-icons/fa';

// interface DynamicIconProps {
// 	iconName: keyof typeof ReactIcons;
// }

// export function DynamicIcon({ iconName }: DynamicIconProps) {
// 	const IconComponent = ReactIcons[iconName];

// 	if (IconComponent) {
// 		return <IconComponent />;
// 	} else {
// 		return <div>Icon not found</div>;
// 	}
// }

import React, { Suspense, lazy } from 'react';

interface DynamicIconProps {
	iconName: string; // You can use a string for the icon name
}

const loadIcon = async (iconName: string) => {
	const iconModule = await import(`react-icons/fa/${iconName}`);
	return iconModule;
};

const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName }) => {
	// const IconComponent = lazy(() => loadIcon(iconName));

	// return (
	// 	// <Suspense fallback={<div>Loading...</div>}>
	// 	<IconComponent />
	// 	// </Suspense>
	// );

	return <h1>sdfsf</h1>;
};

export default DynamicIcon;
