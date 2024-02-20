export class Coordinates {
  private readonly x: number;
  private readonly y: number;

  constructor(x: number, y: number) {
    this.y = y;
    this.x = x;
  }

  moveAlongY(displacement: number) {
    return new Coordinates(this.x, this.y + displacement);
  }

  moveAlongX(displacement: number) {
    return new Coordinates(this.x + displacement, this.y);
  }
}
