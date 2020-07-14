type Direction = "N" | "E" | "S" | "W";

function isPathCrossing(path: string): boolean {
  const history = [[0, 0]];
  let position = [0, 0];
  for (let index = 0; index < path.length; index++) {
    const direction = path[index] as Direction;
    position = getRoute(position, direction);
    if (
      history.find((item) => item[0] === position[0] && item[1] === position[1])
    ) {
      return true;
    } else {
      history.push(position);
    }
  }
  return false;
}

const getRoute = (
  present: number[],
  direction: "N" | "E" | "S" | "W"
): number[] => {
  switch (direction) {
    case "N":
      return [present[0], present[1] + 1];
    case "E":
      return [present[0] + 1, present[1]];
    case "S":
      return [present[0], present[1] - 1];
    case "W":
      return [present[0] - 1, present[1]];
    default:
      return [0, 0];
  }
};
