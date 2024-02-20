export class Direction {
  private direction: string;

  constructor(newDirection: string) {
    this.direction = newDirection;
  }

  isFacingNorth() {
      return this.direction === "N";
  }

  isFacingSouth() {
    return this.direction === "S";
  }

  isFacingWest() {
    return this.direction === "W";
  }

}