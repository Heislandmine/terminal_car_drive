export type RaceObject = {
  type: string;
  text: string;
  pos: number;
};

export function updateRaceObjectPos(target: RaceObject): RaceObject {
  let newPos: number;

  if (target.type === "car") {
    newPos = target.pos;
  } else {
    newPos = target.pos + 1;
  }

  return {
    ...target,
    pos: newPos,
  };
}
