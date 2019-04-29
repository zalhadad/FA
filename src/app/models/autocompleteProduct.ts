import {SubFamily} from "./Family";
import {Brand} from "./brand";
import {UNIT} from "./product";

export class AutocompleteProduct {
    code: string;
    brand: Brand | string;
    unit: UNIT;
    weight: number;
    image: string;
    name: string;
    family: SubFamily;
    subFamily: SubFamily;
}

export class AutocompleteResponse {
    product: AutocompleteProduct;
    closest: AutocompleteProduct[];

}