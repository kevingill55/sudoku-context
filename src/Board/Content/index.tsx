// © Copyright 2021 KMG: Sudoku

import React, { useContext } from "react";
import { Box, ResponsiveContext } from "grommet";
import { v4 as uuidv4 } from "uuid";
import Title from "./Title";
import Square from "./Square";
import { INDEX_BORDER_MAP } from "./Square/constants";

const Content = () => {
  const size = useContext(ResponsiveContext);
  const isSmall = size === "small";
  return (
    <Box
      align="center"
      justify="center"
      // gap="3vw"
      margin={isSmall ? { vertical: "2vh" } : { vertical: "7vh" }}
      direction="row"
      wrap={true}
    >
      <Title />
      <Box
        wrap={true}
        border={{ side: "all", color: "black", size: "3px" }}
        direction="row"
        width="546px"
        style={{ minWidth: "546px" }}
        alignSelf="center"
      >
        {Object.keys(INDEX_BORDER_MAP).map((_, index) => (
          <Square key={uuidv4()} index={index} />
        ))}
      </Box>
    </Box>
  );
};

export default Content;
