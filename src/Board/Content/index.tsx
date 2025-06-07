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
      margin={isSmall ? { vertical: "1vh" } : { vertical: "7vh" }}
      direction="row"
      wrap={true}
    >
      <Title />
      <Box
        wrap={true}
        style={isSmall ? { marginTop: "18px" } : { marginLeft: "24px" }}
        border={
          isSmall
            ? { side: "all", color: "black", size: "0px" }
            : { side: "all", color: "black", size: "3px" }
        }
        direction="row"
        width={isSmall ? "371px" : "546px"}
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
