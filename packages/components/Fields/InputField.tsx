import { get } from 'lodash';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

import Icon from '../Icon';
import { FormControl, FormControlErrorText, FormControlLabelText } from '../gluestack-ui/form-control';
import { Input, InputIcon, InputSlot, InputField as Instance } from '../gluestack-ui/input';

export interface InputProps {
	isRequired?: boolean;
	isDisabled?: boolean;
	isReadOnly?: boolean;
	size?: 'sm' | 'md' | 'lg';
	variant?: 'underlined' | 'outline' | 'rounded';
	type?: 'text' | 'password';
	placeholder?: string;
	label: string;
	name: string;
	control: any;
	errors: any;
	helperText?: string;
}

const InputField = React.forwardRef(
	(
		{
			isRequired,
			isDisabled,
			isReadOnly,
			size,
			variant = 'outline',
			type = 'text',
			placeholder,
			label,
			name,
			control,
			errors,
			helperText,
			...restProps
		}: InputProps,
		ref,
	) => {
		const error = helperText || get(errors, `${name}.message`);
		const [showPassword, setShowPassword] = useState(false);
		const handleState = () => {
			setShowPassword((showState) => {
				return !showState;
			});
		};

		return (
			<Controller
				control={control}
				name={name}
				render={({ field: { value, onChange, onBlur } }) => {
					return (
						<FormControl
							size={size}
							isRequired={isRequired}
							isDisabled={isDisabled}
							isReadOnly={isReadOnly}
							isInvalid={!!error}
						>
							<FormControl.Label>
								<FormControlLabelText>{label}</FormControlLabelText>
							</FormControl.Label>
							<Input variant={variant} sx={{ ':focus': { borderColor: error ? '$error' : '$primary' } }}>
								<Instance
									{...restProps}
									backgroundColor="$white"
									placeholder={placeholder}
									borderColor="$error"
									value={value}
									onBlur={onBlur}
									onChangeText={onChange}
									ref={ref as any}
									type={type === 'text' ? type : showPassword ? 'text' : 'password'}
								/>
								{type === 'password' && (
									<InputSlot pr="$3" onPress={handleState}>
										<InputIcon as={<Icon icon={showPassword ? 'view-on' : 'view-off'} />} color="$textDark400" />
									</InputSlot>
								)}
							</Input>
							<FormControl.Error>
								<FormControlErrorText>{error}</FormControlErrorText>
							</FormControl.Error>
						</FormControl>
					);
				}}
			/>
		);
	},
);

export default InputField;
