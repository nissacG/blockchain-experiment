import { Card as MaterialCard, CardContent, CardMedia, Typography } from "@mui/material"

interface CardProps {
  id: string
  imageUrl: string
  owner: string
}

const Card = ({ id, imageUrl, owner }: CardProps) => {
  return (
    <MaterialCard sx={{ maxWidth: 345 }} data-testid={id}>
      <CardMedia
        component="img"
        height="345"
        image={imageUrl}
        alt={`image for ${imageUrl}`}
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary" >
          Owner:
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ overflowWrap: "break-word" }}>
          {owner}
        </Typography>
      </CardContent>
    </MaterialCard>
  )
}

export default Card
