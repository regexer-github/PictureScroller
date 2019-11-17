import { DropdownItemDto } from '../models/dropdown-item.dto';

export class EnumHelper {
    constructor() {}
    /**
     * Selects all the static property values defined in a given EnumClass and returns an Array of DropdownItemDto
     * Key: value to be translated
     * Value: value to be passed to the backend (should match backend values)
     * @param enumType The class name e.g. MyEnumClass
     * @param prefixed Default true, will provide a prefix 'enum_MyEnumClass_myEnumValue'
     */
    getKeyValues(enumType: any, enumName: string, prefixed = true): DropdownItemDto[] {
        const keyValues: Array<DropdownItemDto> = [];
        // tslint:disable-next-line:forin
        for (const property in enumType) {
            const key = enumType[property];
            keyValues.push({
                dataTextField: this.getKey(key, enumName, prefixed),
                dataValueField: key,
            });
        }
        return keyValues;
    }
    getKey(key: string, enumName: string, prefixed = true): string {
        const prefix = 'enum_' + enumName + '_';
        return (prefixed ? prefix : '') + key;
    }
}
