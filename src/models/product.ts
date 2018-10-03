import { Provider } from './provider';
export class Product {
    private _gtin: string;
    public get gtin(): string {
        return this._gtin;
    }
    public set gtin(value: string) {
        this._gtin = value;
    }
    private _gtinFormat: string;
    public get gtinFormat(): string {
        return this._gtinFormat;
    }
    public set gtinFormat(value: string) {
        this._gtinFormat = value;
    }
    private _label: string;
    public get label(): string {
        return this._label;
    }
    public set label(value: string) {
        this._label = value;
    }
    private _family: string;
    public get family(): string {
        return this._family;
    }
    public set family(value: string) {
        this._family = value;
    }
    private _subFamily: string;
    public get subFamily(): string {
        return this._subFamily;
    }
    public set subFamily(value: string) {
        this._subFamily = value;
    }
    private _brand: string;
    public get brand(): string {
        return this._brand;
    }
    public set brand(value: string) {
        this._brand = value;
    }
    private _stock: number;
    public get stock(): number {
        return this._stock;
    }
    public set stock(value: number) {
        this._stock = value;
    }
    private _stockMin: number;
    public get stockMin(): number {
        return this._stockMin;
    }
    public set stockMin(value: number) {
        this._stockMin = value;
    }
    private _stockMax: number;
    public get stockMax(): number {
        return this._stockMax;
    }
    public set stockMax(value: number) {
        this._stockMax = value;
    }
    private _shouldBalanced: boolean;
    public get shouldBalanced(): boolean {
        return this._shouldBalanced;
    }
    public set shouldBalanced(value: boolean) {
        this._shouldBalanced = value;
    }
    private _noPromo: boolean;
    public get noPromo(): boolean {
        return this._noPromo;
    }
    public set noPromo(value: boolean) {
        this._noPromo = value;
    }
    private _price1: number;
    public get price1(): number {
        return this._price1;
    }
    public set price1(value: number) {
        this._price1 = value;
    }
    private _price2: number;
    public get price2(): number {
        return this._price2;
    }
    public set price2(value: number) {
        this._price2 = value;
    }
    private _tva: TVA;
    public get tva(): TVA {
        return this._tva;
    }
    public set tva(value: TVA) {
        this._tva = value;
    }
    private _weight: number;
    public get weight(): number {
        return this._weight;
    }
    public set weight(value: number) {
        this._weight = value;
    }
    private _unit: UNIT;
    public get unit(): UNIT {
        return this._unit;
    }
    public set unit(value: UNIT) {
        this._unit = value;
    }
    private _provider: Provider;
    public get provider(): Provider {
        return this._provider;
    }
    public set provider(value: Provider) {
        this._provider = value;
    }
    private _image: string;
    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._image = value;
    }
    constructor() {
    }
    public toString = () : string =>{
        return JSON.stringify(this, null , 3);
    }

}

enum UNIT {
    K = "Kilogramme",
    L = "Litre",
}
enum TVA {
    FIVE = 5.5,
    TWENTY = 20,
}