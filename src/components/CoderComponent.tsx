import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import LinkMaterial from "@mui/material/Link";

export const CoderComponent = ({ name, languages, description, linkedIn }: {
  name: string 
  languages: string[]
  description: string 
  linkedIn: string 
}) => {
  return (
    <Card sx={{
      marginBottom: 4,
      width: 300
    }}>
      <CardContent>
        <Typography
          variant="h3"
          component="h1"
          color="primary"
        >
          { name }
        </Typography>
        <Typography
          variant="body1"
          component="h1"
          color="secondary"
        >
          { languages }
        </Typography>
        <Typography
          variant="body2"
          component="h2"
          color="text.primary"
        >
          { description }
        </Typography>
      </CardContent>
      <CardActions>
        <LinkMaterial
          underline="none"
          href={ linkedIn }
          sx={{
            padding: 1,
            border: "1px solid #2196f3",
            borderRadius: 2,
            transition: "ease-in-out",
            "&:hover": {
              border: "1px solid #104b79",
              borderRadius: 0
            }
          }}
        >
          Quer me ver? <span>😳</span>
        </LinkMaterial>
      </CardActions>
    </Card>
  )
}
