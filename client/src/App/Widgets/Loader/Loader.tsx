import { PropsWithChildren } from "react"

interface LoadingProps {
  isLoading: boolean
}

const Loader = ({ children, isLoading }: PropsWithChildren<LoadingProps>) =>
  isLoading
    ? <>Loading...</>
    : <>{children}</>

export default Loader
