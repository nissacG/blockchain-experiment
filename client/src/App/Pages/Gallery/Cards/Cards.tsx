import { Box, Grid } from "@mui/material"
import Card from "./Card"
import useCards from "./useCards"

const Cards = () => {
  const { data, loading, error } = useCards()
  console.log('data:', data)


  return (
    <Box sx={{ backgroundColor: "#f3f3f3", p: 4, height: "100vh" }}>
      <Grid
        container
        spacing={0}

      >
        {data.map(({ id, owner, imageUrl }) => (
          <Grid item xs={12} sm={6} md={4} sx={{ mb: 4 }}>
            <Card key={id} id={id} owner={owner} imageUrl={imageUrl} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Cards
