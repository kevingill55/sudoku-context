import React from "react";
import { Box, Text, Button } from "grommet";
import { FormClose } from "grommet-icons";

const ModalHeader = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => {
  return (
    <Box
      direction="row"
      align="center"
      justify="end"
      fill="horizontal"
      margin={{ bottom: "small" }}
      pad="small"
    >
      <Box width="40px" />
      <Box alignSelf="center" fill={true}>
        <Text size="large" weight={300} color="black" textAlign="center">
          {title}
        </Text>
      </Box>
      <Box align="end" width="40px">
        <Button
          plain={true}
          onClick={onClick}
          icon={<FormClose color="black" />}
        />
      </Box>
    </Box>
  );
};

export default ModalHeader;
