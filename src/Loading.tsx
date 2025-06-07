import React from "react";
import { Spinner, Box, Text } from "grommet";

const Loading = () => {
  return (
    <Box fill={true} justify="center" align="center" pad="xlarge" gap="medium">
      <Spinner size="medium" />
      <Text color="black" size="xlarge" weight={300}>
        Loading
      </Text>
    </Box>
  );
};

export default Loading;
