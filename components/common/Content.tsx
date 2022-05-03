import Grid from "@mui/material/Grid";

type ContentProps = {
  children: JSX.Element;
};

const Content = () => {
  return <Grid container sx={{ padding: 30 }}></Grid>;
};

export default Content;
