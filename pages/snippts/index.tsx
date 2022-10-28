import { NextPage } from "next";
import { getAllSnippts } from "../../lib/snippt";
import { GetStaticProps } from "next";
import { Snippt } from "../../lib/snippt";
import { Card, CardContent, Typography,Button, CardActions } from "@mui/material";
import styles from "../../styles/Snippts.module.css";

const SnipptsPage: NextPage<{ allSnippts: Snippt[] }> = ({
  allSnippts,
}: {
  allSnippts: Snippt[];
}) => {
  return (
    <div className={styles.grid}>
      {allSnippts.map((value: Snippt, index: number) => {
        return (
          <Card sx={{ minWidth: 275 }} key={index}>
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
  );
};
export default SnipptsPage;
export const getStaticProps: GetStaticProps = async () => {
  const allSnippts = getAllSnippts();
  return {
    props: {
      allSnippts,
    },
  };
};
