import { NavLink as RouterLink } from "react-router-dom"
import { Link as MaterialLink } from "@mui/material";

interface NavigationItemProps {
  isActive: boolean
  label: string
  to: string
}

const NavigationItem = ({ isActive, label, to }: NavigationItemProps) => {
  const fontWeight = isActive ? 600 : 300

  return (
    <MaterialLink to={to} component={RouterLink} sx={{ color: "#000", fontWeight, mr: 2, textDecorationColor: "#000" }}>
      {label}
    </MaterialLink>
  )
}

export default NavigationItem
