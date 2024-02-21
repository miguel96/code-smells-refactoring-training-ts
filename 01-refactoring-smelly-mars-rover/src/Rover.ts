import { Direction } from "./Direction";
import { Coordinates } from "./Coordinates";

export class Rover {
  private readonly displacement = 1;

  private direction: Direction;
  private coordinates: Coordinates;

  constructor(x: number, y: number, direction: string) {
    this.coordinates = new Coordinates(x, y);
    this.setDirection(direction);
  }

  public receive(commandsSequence: string) {
    let commands = this.extractCommands(commandsSequence);
    this.runCommands(commands);
  }

  private extractCommands(commandsSequence: string) {
    return commandsSequence.split("");
  }

  private runCommands(commands: string[]) {
    commands.forEach((command) => this.runCommand(command));
  }

  private runCommand(command: string) {
    if (command === "l") {
      this.direction = this.direction.rotateLeft();
    } else if (command === "r") {
      this.direction = this.direction.rotateRight();
    } else if (command === "f") {
      this.move(this.displacement);
    } else {
      this.move(-this.displacement);
    }
  }

  private move(displacement: number) {
    this.coordinates = this.direction.move(this.coordinates, displacement);
  }
  private setDirection(newDirection: string) {
    this.direction = Direction.create(newDirection);
  }
}
