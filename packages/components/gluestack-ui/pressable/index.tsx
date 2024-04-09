'use client';

import { styled } from '@gluestack-style/react';
import { createPressable } from '@gluestack-ui/pressable';
import { Pressable as RNPressable } from 'react-native';

export const UIPressable = createPressable({ Root: RNPressable });

export const Pressable = styled(UIPressable, {
	_web: {
		':focusVisible': {
			outlineWidth: '2px',
			outlineColor: '$primary700',
			outlineStyle: 'solid',
		},
	},
});
