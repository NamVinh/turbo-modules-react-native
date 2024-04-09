import { searchUnsignedStr } from '~/utils';

export const searchTreeData = (
	array: any[],
	searchValue: string,
	searchField: string = 'title',
	searchSecondField: string = 'description',
): any[] => {
	return array
		?.map((item) => {
			if (
				searchUnsignedStr(item?.[searchField] as string, searchValue) ||
				searchUnsignedStr(item?.[searchSecondField] as string, searchValue)
			) {
				return item;
			}

			if (item.children?.length) {
				const filterItemChildren = searchTreeData(item?.children as any[], searchValue);
				if (filterItemChildren?.length) {
					return { ...item, children: filterItemChildren };
				}
			}

			return null;
		})
		.filter(Boolean);
};
