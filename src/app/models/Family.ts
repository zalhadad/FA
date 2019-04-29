export class SubFamily {
    readonly id: string;
    name: string;
}

export class Family extends SubFamily {
    subFamilies: SubFamily[];
}

