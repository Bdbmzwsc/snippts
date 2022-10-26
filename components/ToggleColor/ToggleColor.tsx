import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import * as React from "react";
import { ColorModeContext } from "../../pages/_app";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";

export default function ToggleColor() {
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "right",
        justifyContent: "right",
        color: "text.primary",
        p: 3,
      }}
    >
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}
