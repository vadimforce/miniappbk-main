export interface GameObject {
    id: number;
    type: 'edible' | 'inedible';
    x: number;
    y: number;
    speed: number;
}