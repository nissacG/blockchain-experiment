import { PropsWithChildren } from "react"

interface LoadingProps {
  error: boolean | undefined
}

const ErrorGuard = ({ children, error }: PropsWithChildren<LoadingProps>) =>
  error
    ? <>Uh oh! Theres been an unexpected error. Please try again.</>
    : <>{children}</>

export default ErrorGuard
