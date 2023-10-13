"use client";
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

async function getData() {
  const res = await fetch("https://www.melivecode.com/api/attractions");
  return res.json();
}

export default async function page() {
  const data = await getData();

  return (
    <div>
      <Typography variant="h3">Attractions</Typography>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image={item.coverimage}
                title={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.detail}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={`/attraction/${item.id}`}>
                  <Button size="small">Learn More</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
