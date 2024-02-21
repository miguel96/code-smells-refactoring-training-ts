import { Coordinates } from "./Coordinates";

export abstract class Direction {
  static create(newDirection: string): Direction {
    if (newDirection === "N") {
      return new North();
    }
    if (newDirection === "S") {
      return new South();
    }
    if (newDirection === "W") {
      return new West();
    }
    return new East();
  }

  abstract rotateLeft(): Direction;

  abstract rotateRight(): Direction;

  abstract move(coordinates: Coordinates, displacement: number): Coordinates;
}
class North extends Direction {
  rotateLeft(): Direction {
    return Direction.create("W");
  }

  rotateRight(): Direction {
    return Direction.create("E");
  }

  move(coordinates: Coordinates, displacement: number): Coordinates {
    return coordinates.moveAlongY(displacement);
  }
}

class South extends Direction {
  rotateLeft(): Direction {
    return Direction.create("E");
  }

  rotateRight(): Direction {
    return Direction.create("W");
  }

  move(coordinates: Coordinates, displacement: number): Coordinates {
    return coordinates.moveAlongY(-displacement);
  }
}

class West extends Direction {
  rotateLeft(): Direction {
    return Direction.create("S");
  }

  rotateRight(): Direction {
    return Direction.create("N");
  }

  move(coordinates: Coordinates, displacement: number): Coordinates {
    return coordinates.moveAlongX(-displacement);
  }
}

class East extends Direction {
  rotateLeft(): Direction {
    return Direction.create("N");
  }

  rotateRight(): Direction {
    return Direction.create("S");
  }

  move(coordinates: Coordinates, displacement: number): Coordinates {
    return coordinates.moveAlongX(displacement);
  }
}
