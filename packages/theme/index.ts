import { extendTheme } from '@gluestack-ui/themed-native-base';
import hexToRgba from 'hex-to-rgba';

const primary = '#32A1C8';
const success = '#2FCE00';
const warning = '#FEA800';
const error = '#FF494E';
const text = '#272727';
const disabled = '#E3E6E8';
const white = '#fff';
const black = '#000';
const theme = extendTheme({
	colors: {
		primary,
		success,
		warning,
		error,
		text,
		disabled,
		white,
		black,
		// Colors with aplha
		primaryAlpha: {
			50: hexToRgba(primary, 0.05),
			100: hexToRgba(primary, 0.1),
			200: hexToRgba(primary, 0.2),
			300: hexToRgba(primary, 0.3),
			400: hexToRgba(primary, 0.4),
			500: hexToRgba(primary, 0.5),
			600: hexToRgba(primary, 0.6),
			700: hexToRgba(primary, 0.7),
			800: hexToRgba(primary, 0.8),
			900: hexToRgba(primary, 0.9),
		},
		successAlpha: {
			50: hexToRgba(success, 0.05),
			100: hexToRgba(success, 0.1),
			200: hexToRgba(success, 0.2),
			300: hexToRgba(success, 0.3),
			400: hexToRgba(success, 0.4),
			500: hexToRgba(success, 0.5),
			600: hexToRgba(success, 0.6),
			700: hexToRgba(success, 0.7),
			800: hexToRgba(success, 0.8),
			900: hexToRgba(success, 0.9),
		},
		warningAlpha: {
			50: hexToRgba(warning, 0.05),
			100: hexToRgba(warning, 0.1),
			200: hexToRgba(warning, 0.2),
			300: hexToRgba(warning, 0.3),
			400: hexToRgba(warning, 0.4),
			500: hexToRgba(warning, 0.5),
			600: hexToRgba(warning, 0.6),
			700: hexToRgba(warning, 0.7),
			800: hexToRgba(warning, 0.8),
			900: hexToRgba(warning, 0.9),
		},
		errorAlpha: {
			50: hexToRgba(error, 0.05),
			100: hexToRgba(error, 0.1),
			200: hexToRgba(error, 0.2),
			300: hexToRgba(error, 0.3),
			400: hexToRgba(error, 0.4),
			500: hexToRgba(error, 0.5),
			600: hexToRgba(error, 0.6),
			700: hexToRgba(error, 0.7),
			800: hexToRgba(error, 0.8),
			900: hexToRgba(error, 0.9),
		},
		textAlpha: {
			50: hexToRgba(text, 0.05),
			100: hexToRgba(text, 0.1),
			200: hexToRgba(text, 0.2),
			300: hexToRgba(text, 0.3),
			400: hexToRgba(text, 0.4),
			500: hexToRgba(text, 0.5),
			600: hexToRgba(text, 0.6),
			700: hexToRgba(text, 0.7),
			800: hexToRgba(text, 0.8),
			900: hexToRgba(text, 0.9),
		},
		disabledAlpha: {
			50: hexToRgba(disabled, 0.05),
			100: hexToRgba(disabled, 0.1),
			200: hexToRgba(disabled, 0.2),
			300: hexToRgba(disabled, 0.3),
			400: hexToRgba(disabled, 0.4),
			500: hexToRgba(disabled, 0.5),
			600: hexToRgba(disabled, 0.6),
			700: hexToRgba(disabled, 0.7),
			800: hexToRgba(disabled, 0.8),
			900: hexToRgba(disabled, 0.9),
		},
		whiteAlpha: {
			50: hexToRgba(white, 0.05),
			100: hexToRgba(white, 0.1),
			200: hexToRgba(white, 0.2),
			300: hexToRgba(white, 0.3),
			400: hexToRgba(white, 0.4),
			500: hexToRgba(white, 0.5),
			600: hexToRgba(white, 0.6),
			700: hexToRgba(white, 0.7),
			800: hexToRgba(white, 0.8),
			900: hexToRgba(white, 0.9),
		},
		blackAlpha: {
			50: hexToRgba(black, 0.05),
			100: hexToRgba(black, 0.1),
			200: hexToRgba(black, 0.2),
			300: hexToRgba(black, 0.3),
			400: hexToRgba(black, 0.4),
			500: hexToRgba(black, 0.5),
			600: hexToRgba(black, 0.6),
			700: hexToRgba(black, 0.7),
			800: hexToRgba(black, 0.8),
			900: hexToRgba(black, 0.9),
		},
	},
});
export type CustomThemeType = typeof theme;
export default theme;
