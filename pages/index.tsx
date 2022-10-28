import type { NextPage } from "next";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import ToggleColor from "../components/ToggleColor";
import DrawerCom from "../components/DrawerC/DrawerC";
import { Drawer } from "@mui/material";
import DrawerC from "../components/DrawerC/DrawerC";
import { getAllSnippts } from "../lib/snippt";
import { GetStaticProps } from "next";
import { Snippt } from "../lib/snippt";
import { Card, CardContent, CardActions } from "@mui/material";
import styles from "../styles/Home.module.css";

const Home: NextPage<{ allSnippts: Snippt[] }> = ({
  allSnippts,
}: {
  allSnippts: Snippt[];
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpen(open);
    };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Snippts
            </Typography>
            <ToggleColor />
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <DrawerC toggleDrawer={toggleDrawer} />
      </Drawer>
      <main className={styles.main}>
        <Typography variant="h4">Snippts</Typography>
        <div className={styles.grid}>
          {allSnippts.map((value: Snippt, index: number) => {
            return (
              <Card sx={{ minWidth: 275, paddingRight: "1.5rem" }} key={index}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {value.name}
                  </Typography>
                  <br />
                  {value.date}
                </CardContent>
                <CardActions>
                  <Button size="small">read more</Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;
export const getStaticProps: GetStaticProps = async () => {
  const allSnippts = getAllSnippts();
  return {
    props: {
      allSnippts,
    },
  };
};
