import noMoreContentImg from "../../assets/no-more-content.png";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ErrNotFoundPage = () => {
  return (
    <Stack alignItems="center" spacing={4}>
      <img src={noMoreContentImg} alt="No content." width={160} />
      <Typography variant="body1">
        Well, this is awkward. We can&apos;t find what you&apos;re looking for.
      </Typography>
      <Link to="/">
        <Typography variant="body2">Return to home page.</Typography>
      </Link>
    </Stack>
  );
};

export default ErrNotFoundPage;
