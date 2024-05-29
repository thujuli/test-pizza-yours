import { Stack, Typography } from "@mui/material";

type Props = {
  total: number;
};

export default function Price({ total }: Props) {
  return (
    <Stack>
      <Typography variant="h4" component="h1">
        Price
      </Typography>
      <Typography variant="h5" component="p">
        ${total}
      </Typography>
    </Stack>
  );
}
