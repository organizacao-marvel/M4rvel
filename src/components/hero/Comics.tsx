import React from 'react'
import { Card, CardContent, CardActions, Typography, Link } from "@mui/material";

export const Comics = ({ comicsName, comicsURL }: {
  comicsName: string
  comicsURL: string  
}) => {

  return (
    <Card sx={{
      width: 200
    }}>
      <CardContent>
        <Typography>
          { comicsName }
        </Typography>
        <CardActions>
          <Link
            variant="body1"
            underline="none"
            href={ comicsURL }
          >
            Veja mais!!
          </Link>
        </CardActions>
      </CardContent>
    </Card>
  )
}
