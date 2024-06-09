import { RouterProvider } from "react-router-dom";
import BackgroundLayout from "./layouts/BackgroundLayout";
import router from "./router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <BackgroundLayout />
    </>
  );
}

export default App;
