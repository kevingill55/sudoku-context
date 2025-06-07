import React from "react";
import { Box, Text } from "grommet";

const TitleButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => (
  <Box
    hoverIndicator={{ color: "light-2" }}
    onClick={onClick}
    flex={false}
    align="center"
    border={{ color: "black" }}
    pad={"small"}
  >
    <Text size={"small"} color="black">
      {label}
    </Text>
  </Box>
);

export default TitleButton;
