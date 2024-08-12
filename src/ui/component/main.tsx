import React from "react";
import { Box, Newline, Text } from "ink";

const line = {
  text: "■■■■■■■■■■■■\n",
  pos: 2,
};

const lines = [line, { text: "■■■■■■■■■■■■\n", pos: 4 }];
const MAX_LINE_COUNT = 12; // indexは0 ~ 11

export const Main = () => {
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

    console.log(renderContents);
    return <Text>{renderContents}</Text>;
  };
  return (
    <Box width={14} borderStyle="single">
      <Text>{createRenderContents()}</Text>
    </Box>
  );
};
