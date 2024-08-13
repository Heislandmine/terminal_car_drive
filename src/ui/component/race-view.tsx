import React from "react";
import { Text, Newline, Box } from "ink";
import { RaceObject } from "../../race-object.js";

export const RaceView = ({
  raceObjects,
  width,
  height,
}: {
  raceObjects: RaceObject[];
  width: number;
  height: number;
}) => {
  const createRenderContents = () => {
    const renderContents: React.ReactElement[] = [];

    for (let i = 0; i < height; i++) {
      const contentForLine = raceObjects.find((e) => e.pos === i);
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
    <Box width={width} borderStyle="single">
      {createRenderContents()}
    </Box>
  );
};
