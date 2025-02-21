export interface GameState {
    score: number;
    lives: number;
    level: number;
    objects: GameObject[];
    isGameOver: boolean;
}