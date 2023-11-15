import Main from "./components/Main";
import AdviceCard from "./components/AdviceCard";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Main>
      <AdviceCard />
      <Analytics />
    </Main>
  );
}

export default App;
