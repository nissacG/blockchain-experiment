import { Container, Typography } from '@mui/material'

const Gallery = () => {
  return (
    <Container maxWidth={false} sx={{ backgroundColor: "#000", p: 3, m: 0 }}>
      <Typography variant="h4" component="div" sx={{ color: "#fff" }} >CovidPunks</Typography>
    </Container>
  )
}

export default Gallery
