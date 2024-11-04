import Header from "./components/Header";
import "./App.css";
import { useState } from "react";
import Content from "./components/Content";

export default function App() {
  const [tab, setTab] = useState("home");
  return (
    <div className="App">
      <Header setTab={setTab} />
      <Content tab={tab} />
      {/*<AddBook />*/}
    </div>
  );
}
