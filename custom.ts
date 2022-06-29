
/**
 * Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
 * Weitere Informationen unter https://makecode.calliope.cc/blocks/custom
 */

/**
 * Algorithmik-Blöcke
 */
//% weight=100 color=#0fbc11 icon=""
namespace Algorithmik {
    /**
     * Sortiere das angegebene Array
     * @param array: Das zu sortierende Array
     */
    //% block="sort $array"
    //% block.loc.de="sortiere $array"
    export function sort(array: Array<any>): Array<any> {
        return array.sort();
    }

    //% block="sort $array of numbers"
    //% block.loc.de="sortiere $array von Zahlen"
    export function sortNumbers(array: Array<number>): Array<number> {
        return array.sort((a: number, b: number) => {
            return a - b;
        });
    }

    //% block="import comma-separated list of numbers from $text"
    //% block.loc.de="Importiere kommaseparierte Liste von Zahlen aus $text"
    export function numberListToArray(text: string): Array<number> {
        const numbersPadded = text.split(",");
        const numbersArray = numbersPadded.map(function (paddedNumber) {
            return parseInt(paddedNumber);
        });
        return numbersArray;
    }

    //% block="convert $text to array"
    //% block.loc.de="konvertiere $text in ein Array"
    export function textToArray(text: string): Array<string> {
        return text.split("");
    }

    //% block="convert $array to string"
    //% block.loc.de="konvertiere $array in einen Text"
    export function arrayToText(array: Array<string | number>): string {
        return array.join(", ");
    }

    //% block="$array1 is equal to $array2"
    //% block.loc.de="$array1 ist gleich $array2"
    export function compareArrays(array1: Array<string>, array2: Array<string>): boolean {
        if(array1.length !== array2.length) return false;
        let equal = true;
        array1.forEach(function (value: string, index: number) {
            if(value !== array2.get(index)) equal = false;
        });
        return equal;
    }
}
