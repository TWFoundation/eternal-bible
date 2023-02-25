import { BrowserRouter } from "react-router-dom";
import RootRouter from "./routes";
import { Suspense } from "react";
import { GlobalStyles } from "./theme";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <RootRouter />
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
