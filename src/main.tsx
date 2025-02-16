import { render } from "preact";
import "./index.css";
import { App } from "./app.tsx";
import { RecoilRoot } from "recoil";

render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("app")!
);
