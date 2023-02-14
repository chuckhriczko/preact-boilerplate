interface ErrorBoundaryProps {
  error: Error;
}

/**
 * The error boundary will prevent the app from crashing completely,
 * providing the user with a message so they know what's going on
 * @param children
 */
const ErrorBoundary = ({ error }: ErrorBoundaryProps) => 
  <div className="error error-boundary">
    <h1>Error</h1>
    <p>An error occurred.</p>
    {error && <small>Reason: {error.message}</small>}
  </div>
export default ErrorBoundary;