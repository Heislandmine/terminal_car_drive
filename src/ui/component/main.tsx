import React, { useEffect, useState } from "react";
import { Box, Newline, Text } from "ink";
import { RaceView } from "./race-view.js";
import { updateRaceObjectPos } from "../../race-object.js";

const line = {
  type: "block",
  text: "■■■■■■■■■■■■\n",
  pos: {
    line: 2,
    index: 0,
  },
};

const car = {
  type: "car",
  text: "□\n",
  pos: {
    line: 9,
    index: 0,
  },
};
const _lines = [
  line,
  { type: "block", text: "■■■■■■■■■■■■\n", pos: { line: 4, index: 0 } },
  car,
];
const MAX_LINE_COUNT = 12; // indexは0 ~ 11

export const Main = () => {
  const [timeTick, setTimeTick] = useState(0);
  const [lines, setLines] = useState(_lines);

  useEffect(() => {
    setInterval(() => {
      setTimeTick((v) => v + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    setLines((e) => e.map((line) => updateRaceObjectPos(line)));
  }, [timeTick]);

  return (
    <Box flexDirection="column" borderStyle={"single"}>
      <Box width={14} borderStyle={"single"}>
        <Text>{`Time: ${timeTick}`}</Text>
      </Box>

      <RaceView raceObjects={lines} width={14} height={MAX_LINE_COUNT} />
    </Box>
  );
};
