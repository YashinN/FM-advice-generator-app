import { useEffect, useState } from "react";

import Main from "./components/Main";
import AdviceCard from "./components/AdviceCard";

function App() {
  const [quote, setQuote] = useState();

  useEffect(() => {
    const getQuote = async () => {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setQuote(data.slip);
    };

    getQuote();
  }, []);

  return (
    <Main>
      <AdviceCard quote={quote} />
    </Main>
  );
}

export default App;
