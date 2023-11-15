import { useState, useEffect } from "react";

const useQuote = (dependancies = []) => {
  const [quote, setQuote] = useState();

  useEffect(() => {
    let randomID = Math.floor(Math.random() * 225 + 1);
    const getQuote = async () => {
      const res = await fetch(`https://api.adviceslip.com/advice/${randomID}`);
      const data = await res.json();
      setQuote(data.slip);
      console.log(data.slip);
    };

    getQuote();
  }, [...dependancies]);

  return { quote };
};

export default useQuote;
