// - Name,
// - Image
// - Variety,
// - Price,
// - Stock,
// - Origin,
// - Season

export interface IMango {
    Name: string;
    Variety: string;
    unit: "KG" | "TON";
    Price: number;
    Stock: number;
    Origin: string;
    Season: "Summer" | "Winter" | "Autumn" | "Spring";
}