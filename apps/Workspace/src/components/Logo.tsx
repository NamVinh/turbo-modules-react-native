import React, { type FC } from 'react';
import { Image, type ImageProps, StyleSheet } from 'react-native';

import { Images } from '~/assets';

export interface ILogoProps extends Omit<ImageProps, 'source'> {
	testID?: string;
	source?: string | { uri: string };
}

export const Logo: FC<ILogoProps> = ({ style, ...props }: ILogoProps) => {
	return <Image {...props} style={StyleSheet.flatten([styles.container, style])} source={Images.logo} />;
};

const styles = StyleSheet.create({
	container: {
		width: 200,
		height: 50,
		resizeMode: 'contain',
	},
});
