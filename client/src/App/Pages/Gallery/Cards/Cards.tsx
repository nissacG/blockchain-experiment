import { Box, Grid } from "@mui/material"
import Loader from "../../../Widgets/Loader"
import ErrorGuard from "../../../Widgets/ErrorGuard"
import Card from "./Card"
import useCards from "./useCards"

const Cards = () => {
  const { data, loading, error } = useCards("0xe4cfae3aa41115cb94cff39bb5dbae8bd0ea9d41")
  console.log('error:', error)

  return (
    <ErrorGuard error={error}>
      <Box sx={{ backgroundColor: "#f3f3f3", p: 4, height: `calc(100vh - 248px)`, overflowY: "scroll" }}>
        <Grid
          container
          spacing={0}
        >
          <Loader isLoading={loading} >
            {data?.length && data.map(({ id, tokenOwner, tokenImageUrl }) => (
              <Grid key={id} item xs={12} sm={6} md={4} sx={{ mb: 4 }}>
                <Card id={id} owner={tokenOwner} imageUrl={tokenImageUrl} />
              </Grid>
            ))}
            {!data && "Contract does not exist please try another"}
          </Loader>
        </Grid>
      </Box>
    </ErrorGuard>
  )
}

export default Cards
