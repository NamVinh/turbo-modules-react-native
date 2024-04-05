import IcoMoon, { type IconProps as IconPropsBase } from 'react-icomoon';
import { Path, Svg } from 'react-native-svg';

import iconSet from './selection.json';

// console.log(iconList(iconSet));
const IconNames = [
	'move',
	'file-doc',
	'file-img',
	'file-pdf',
	'file-rar',
	'file-xls',
	'file-zip',
	'add-document',
	'check-circle-fill',
	'copy',
	'email-marketing',
	'like',
	'schedule',
	'tag',
	'uncheck-circle',
	'save',
	'upload-template',
	'gantt',
	'view-off',
	'view-on',
	'warning-triangle',
	'more-verticel',
	'down',
	'minus',
	'plus',
	'hv-add',
	'rs-add',
	'info',
	'nav',
	'arrow-bold-left',
	'arrow-bold-right',
	'pen',
	'refresh',
	'close',
	'question-circle',
	'question',
	'accounting-module',
	'attach-italic',
	'bag',
	'bell',
	'bizcore-module',
	'calendar',
	'checkbox-circle-bottom',
	'close-circle',
	'dashboard',
	'database',
	'download-template',
	'filter',
	'gift-add',
	'gift',
	'hcm-module',
	'hv-accept',
	'hv-cancel',
	'hv-config',
	'hv-delete',
	'hv-edit',
	'hv-send-mail',
	'image-add',
	'image',
	'key-horizontal',
	'key-itatic',
	'left',
	'lock',
	'login',
	'logout',
	'purchase-module',
	'right',
	'rs-collapse',
	'rs-delete',
	'rs-expand',
	'sale-module',
	'search',
	'setting',
	'sider-collapse',
	'sider-expand',
	'unlock',
	'up',
	'update',
	'user',
	'warehouse-module',
	'world',
	'youtube',
] as const;

export interface IconProps extends Omit<IconPropsBase, 'icon'> {
	disabled?: boolean;
	icon: (typeof IconNames)[number];
}

const Icon = ({
	size = 16,

	disabled = false,
	onClick,
	onMouseLeave,
	onMouseEnter,
	...restProps
}: IconProps) => {
	return (
		<IcoMoon
			native
			SvgComponent={Svg}
			PathComponent={Path}
			size={size}
			iconSet={iconSet}
			onClick={!disabled ? onClick : undefined}
			onMouseLeave={!disabled ? onMouseLeave : undefined}
			onMouseEnter={!disabled ? onMouseEnter : undefined}
			{...restProps}
		/>
	);
};

export default Icon;
