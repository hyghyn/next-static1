import React from "react";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
} from "@mui/material";

export async function generateStaticParams() {
  const res = await fetch(
    "http://www.melivecode.com/api/attractions/static_paths"
  );
  const data = await res.json();
  return data;
  /*return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
    { id: "11" },
    { id: "12" },
  ];*/
}

export async function generateMetadata({ params }) {
  const res = await fetch(
    "https://www.melivecode.com/api/attractions/" + params.id
  );
  const data = await res.json();
  return {
    title: data.attraction.name,
    openGraph: {
      title: data.attraction.name,
      description: data.attraction.detail,
      siteName: "Travel App",
      images: [
        {
          // url: "https://nextjs.org/og.png",
        },
      ],
    },
  };
}

async function getAttraction(params) {
  const res = await fetch(
    "https://www.melivecode.com/api/attractions/" + params.id
  );
  const data = await res.json();
  return data;
}

async function page({ params }) {
  const data = await getAttraction(params);

  return (
    <Card>
      <CardMedia
        sx={{ height: 300 }}
        image={data.attraction.coverimage}
        title={data.attraction.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.attraction.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.attraction.detail}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default page;
