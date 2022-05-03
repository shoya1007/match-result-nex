import Content from "../components/common/Content";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={3} />
      <Grid item xs={6}>
        <Content />
      </Grid>
      <Grid item xs={3} />
    </Grid>
  );
};

export default Home;
