export const searchUnsignedStr = (str: string, searchValue: string) => {
	if (!searchValue?.length) {
		return true;
	}

	if (!str?.length) {
		return false;
	}

	return unSignedStr(str.toLowerCase()).includes(unSignedStr(searchValue.toLowerCase()));
};

const unSignedStr = (str: string) => {
	if (str?.length) {
		return str
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/đ/g, 'd')
			.replace(/Đ/g, 'D');
	}

	return str;
};
