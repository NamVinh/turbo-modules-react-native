import { get } from 'lodash';
import React from 'react';
import { Controller } from 'react-hook-form';

import Icon from '../Icon';
import { FormControl, FormControlErrorText, FormControlLabelText } from '../gluestack-ui/form-control';
import {
	Select,
	SelectBackdrop,
	SelectContent,
	SelectDragIndicator,
	SelectDragIndicatorWrapper,
	SelectIcon,
	SelectInput,
	SelectItem,
	SelectPortal,
	SelectTrigger,
} from '../gluestack-ui/select';

export interface SelectProps {
	isRequired?: boolean;
	isDisabled?: boolean;
	isReadOnly?: boolean;
	size?: 'sm' | 'md' | 'lg';
	variant?: 'underlined' | 'outline' | 'rounded';
	placeholder?: string;
	options: any[];
	fileNames?: { label: string; value: string; isDisabled: string };
	label: string;
	name: string;
	control: any;
	errors: any;
	helperText?: string;
}

const SelectField = React.forwardRef(
	(
		{
			isRequired,
			isDisabled,
			isReadOnly,
			size,
			variant = 'outline',
			placeholder,
			options = [],
			fileNames = { label: 'label', value: 'value', isDisabled: 'isDisabled' },
			label,
			name,
			control,
			errors,
			helperText,
		}: SelectProps,
		ref,
	) => {
		const error = helperText || get(errors, `${name}.message`);

		return (
			<Controller
				control={control}
				name={name}
				render={({ field: { value, onBlur, onChange } }) => {
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
							<Select onValueChange={onChange}>
								<SelectTrigger variant={variant}>
									<SelectInput placeholder={placeholder} value={value} onBlur={onBlur} ref={ref as any} />
									<SelectIcon mr="$3">
										<Icon icon="down" size={24} color="black" />
									</SelectIcon>
								</SelectTrigger>
								<SelectPortal>
									<SelectBackdrop />
									<SelectContent>
										<SelectDragIndicatorWrapper>
											<SelectDragIndicator />
										</SelectDragIndicatorWrapper>
										{options.map((item) => {
											return (
												<SelectItem
													key={item[fileNames.value]}
													label={item[fileNames.label]}
													value={item[fileNames.value]}
													isDisabled={item[fileNames.isDisabled]}
												/>
											);
										})}
									</SelectContent>
								</SelectPortal>
							</Select>
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

export default SelectField;
