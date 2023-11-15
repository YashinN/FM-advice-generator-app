import { useState, useEffect } from "react";

const useQuote = (dependancies = []) => {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let randomID = Math.floor(Math.random() * 225 + 1);

    const getQuote = async () => {
      setLoading(true);

      try {
        const res = await fetch(
          `https://api.adviceslip.com/advice/${randomID}`
        );
        const data = await res.json();
        setQuote(data.slip);
      } catch (error) {
        throw new Error("Problem Eish!");
      } finally {
        setLoading(false);
      }
    };

    getQuote();
  }, [...dependancies]);

  return { quote, loading };
};

export default useQuote;
