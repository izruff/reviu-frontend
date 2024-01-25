import { Stack, Typography } from "@mui/material";
import noMoreContentImg from "../../../public/no-more-content.png";
import { Link } from "react-router-dom";

const ErrNotFoundPage = () => {
  return <Stack alignItems="center" spacing={4}>
    <img src={noMoreContentImg} alt="No content." width={160} />
    <Typography variant="body1">Well, this is awkward. We can't find what you're looking for.</Typography>
    <Link to="/"><Typography variant="body2">Return to home page.</Typography></Link>
  </Stack>
};

export default ErrNotFoundPage;
