import { Stack, Typography } from "@mui/material";

type Props = {
  name: string;
  image: string;
  price: number;
};

export default function Poster({ image, name, price }: Props) {
  return (
    <Stack sx={{ marginTop: "20px" }}>
      <Stack sx={{ height: "150px" }}>
        <img
          src={image}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Stack>
      <Typography variant="h5" component="p">
        {name}
      </Typography>
      <Typography variant="h6" component="p">
        ${price}
      </Typography>
    </Stack>
  );
}
