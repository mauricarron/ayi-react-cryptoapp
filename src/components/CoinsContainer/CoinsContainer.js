import { useEffect, useState } from "react";
import CoinsList from "../CoinsList/CoinsList";
import LoadingProgress from "../commons/LoadingProgress";

const CoinsContainer = () => {
  const [coinsList, setCoinsList] = useState();
  const [loading, setLoading] = useState(true);

  const CURRENCY = "USD";
  const LIMIT = 10;
  const url = `https://api.coinstats.app/public/v1/coins?skip=0&limit=${LIMIT}&currency=${CURRENCY}`;

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setCoinsList(data.coins);
        setLoading(false);
      });
  }, []);

  return (
    <>{loading ? <LoadingProgress /> : <CoinsList coinsList={coinsList} />}</>
  );
};

export default CoinsContainer;
