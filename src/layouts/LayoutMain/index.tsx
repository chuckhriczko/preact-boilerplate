//Framework
import { useErrorBoundary } from "preact/hooks";

//Sections
import Header from './header';
import Footer from './footer';
import ErrorBoundary from "../../components/ErrorBoundary";

//Types
import LayoutProps from "../layouts";

/**
 * Our primary layout. Other layouts can be created by
 * copying this folder and modifying the Layout function name
 * @param children
 */
const LayoutMain = ({ children }: LayoutProps) => {
  //Set up our layout's error boundary
  const [error] = useErrorBoundary();

  //Short circuit our layout and return
  //the error boundary if there is an error
  if (error) {
    return <ErrorBoundary error={error} />;
  }

  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}
export default LayoutMain;