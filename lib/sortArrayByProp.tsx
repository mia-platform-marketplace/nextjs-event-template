type ItemType = { position?: number;[key: string]: any };

export const sortArrayByPosition = (array: ItemType[], sortingProp: string = 'position'): ItemType[] => {
    return [...array].sort((a, b) => {
        if (a[sortingProp] < b[sortingProp]) {
            return -1;
        } else if (a[sortingProp] > b[sortingProp]) {
            return 1;
        }
        return 0;
    });
}