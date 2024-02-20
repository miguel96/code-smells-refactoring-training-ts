export class Coordinates {
  private readonly x: number;
  private readonly y: number;

  constructor(x: number, y: number) {
    this.y = y;
    this.x = x;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }
}
