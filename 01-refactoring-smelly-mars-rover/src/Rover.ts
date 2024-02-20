import { Direction } from "./Direction";
import { Coordinates } from "./Coordinates";

export class Rover {
  private direction: Direction;
  private coordinates: Coordinates;

  constructor(x: number, y: number, direction: string) {
    this.coordinates = new Coordinates(x, y);
    this.setDirection(direction);
  }

  public receive(commandsSequence: string) {
    for (let i = 0; i < commandsSequence.length; ++i) {
      const command = commandsSequence.substring(i, i + 1);

      if (command === "l") {
        // Rotate Rover
        if (this.direction.isFacingNorth()) {
          this.setDirection("W");
        } else if (this.direction.isFacingSouth()) {
          this.setDirection("E");
        } else if (this.direction.isFacingWest()) {
          this.setDirection("S");
        } else {
          this.setDirection("N");
        }
      } else if (command === "r") {
        // Rotate Rover
        if (this.direction.isFacingNorth()) {
          this.setDirection("E");
        } else if (this.direction.isFacingSouth()) {
          this.setDirection("W");
        } else if (this.direction.isFacingWest()) {
          this.setDirection("N");
        } else {
          this.setDirection("S");
        }
      } else {
        // Displace Rover
        let displacement1 = -1;

        if (command === "f") {
          displacement1 = 1;
        }
        let displacement = displacement1;
        if (this.direction.isFacingNorth()) {
          this.coordinates = this.coordinates.moveAlongY(displacement);
        } else if (this.direction.isFacingSouth()) {
          this.coordinates = this.coordinates.moveAlongY(-displacement);
        } else if (this.direction.isFacingWest()) {
          this.coordinates = this.coordinates.moveAlongX(-displacement);
        } else {
          this.coordinates = this.coordinates.moveAlongX(displacement);
        }
      }
    }
  }

  private setDirection(newDirection: string) {
    this.direction = new Direction(newDirection);
  }
}
