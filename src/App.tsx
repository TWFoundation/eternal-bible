import { BrowserRouter } from "react-router-dom";
import RootRouter from "./routes";
import { Suspense } from "react";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <RootRouter />
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
