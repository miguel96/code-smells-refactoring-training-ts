

export abstract class Direction{
  private readonly direction: string;

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

  static create(newDirection: string): Direction {
    if (newDirection === "N") {
      return new North()
    }
    if (newDirection === "S") {
      return new South()
    }
    if (newDirection === "W") {
      return new West()
    }
    return new East()
  }

  abstract rotateLeft (): Direction

}
class North extends Direction {

  constructor() {
    super("N");
  }

  rotateLeft(): Direction {
   return Direction.create("W");
  }
}

class South extends Direction {

  constructor() {
    super("S");
  }

  rotateLeft(): Direction {
    return Direction.create("E");
  }
}

class West extends Direction {

  constructor() {
    super("W");
  }

  rotateLeft(): Direction {
    return Direction.create("S");
  }
}

class East extends Direction {

  constructor() {
    super("E");
  }

  rotateLeft(): Direction {
    return Direction.create("N");
  }
}