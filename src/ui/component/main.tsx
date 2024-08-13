import React, { useEffect, useState } from "react";
import { Box, Newline, Text } from "ink";

const line = {
  text: "■■■■■■■■■■■■\n",
  pos: 2,
};

const _lines = [line, { text: "■■■■■■■■■■■■\n", pos: 4 }];
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
    setLines((e) => e.map((line) => ({ ...line, pos: line.pos + 1 })));
  }, [timeTick]);

  const createRenderContents = () => {
    const renderContents: React.ReactElement[] = [];

    for (let i = 0; i < MAX_LINE_COUNT; i++) {
      const contentForLine = lines.find((e) => e.pos === i);
      const content = contentForLine ? (
        <Text key={i}>{contentForLine.text}</Text>
      ) : (
        <Newline key={i}></Newline>
      );

      renderContents.push(content);
    }

    return <Text>{renderContents}</Text>;
  };

  return (
    <Box width={14} borderStyle="single">
      {createRenderContents()}
    </Box>
  );
};
