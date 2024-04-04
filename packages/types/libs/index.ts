import { type CustomThemeType } from '@biso24/theme';

declare module 'native-base' {
	interface ICustomTheme extends CustomThemeType {}
}
