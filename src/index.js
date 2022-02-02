import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import User from "./User";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />}> */}
        {/* <Route index element={<User />} /> */}
        <Route path="users/:id" element={<User />}>
          <Route path=":id" element={<User />} />
          {/*    <Route path="new" element={<NewTeamForm />} / >*/}
          {/*  <Route index element={<LeagueStandings />} />  */}
        </Route>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
