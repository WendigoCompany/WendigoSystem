import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import ReziseProvider from "./Context/Mobile";
import Main from "./Pages/Main/Main";
import Visual from "./Pages/Visual/Visual";
import Error from "./Pages/Error/Error";
import Disclaim from "./Pages/Disclaim/Disclaim";

const Router =
  process.env.NODE_ENV === "development" ? BrowserRouter : HashRouter;

export const github_url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "https://wendigocompany.github.io/WendigoSystem/";

export default function App() {
  return (
    <div>
      <ReziseProvider>
        <Router>
          <Routes>
          <Route
              strict
              exact
              element={<Disclaim></Disclaim>}
              path="/:id"
            ></Route>
            <Route
              strict
              exact
              element={<Disclaim></Disclaim>}
              path="/"
            ></Route>

            <Route strict exact element={<Main></Main>} path="/main:id"></Route>
            <Route strict exact element={<Main></Main>} path="/main"></Route>

            <Route
              strict
              exact
              element={<Visual></Visual>}
              path="/visual:id"
            ></Route>
            <Route
              strict
              exact
              element={<Visual></Visual>}
              path="/visual"
            ></Route>

            <Route strict exact element={<Error></Error>} path="/error"></Route>
          </Routes>
        </Router>
      </ReziseProvider>
    </div>
  );
}
