export type RaceObject = {
  type: string;
  text: string;
  pos: RaceObjectPosition;
};

export type RaceObjectPosition = { line: number; index: number };

export function updateRaceObjectPos(target: RaceObject): RaceObject {
  let newPos: RaceObjectPosition;

  if (target.type === "car") {
    newPos = target.pos;
  } else {
    newPos = { ...target.pos, line: target.pos.line + 1 };
  }

  return {
    ...target,
    pos: newPos,
  };
}
