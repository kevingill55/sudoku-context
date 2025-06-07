import React from "react";
import { Box, Button } from "grommet";

const ModalButton = ({
  label,
  onClick,
}: {
  onClick: () => void;
  label: string;
}) => (
  <Box justify="center" width="small" border={{ color: "black" }}>
    <Button
      color="app"
      primary={true}
      label={label}
      onClick={onClick}
      style={{ color: "black", borderRadius: "0" }}
    />
  </Box>
);

export default ModalButton;
