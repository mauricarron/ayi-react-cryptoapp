import { useEffect, useState } from "react";
import CoinsList from "../CoinsList/CoinsList";
import LoadingProgress from "../commons/LoadingProgress";

const CoinsListContainer = () => {
  const [coinsList, setCoinsList] = useState();
  const [loading, setLoading] = useState(true);

  const CURRENCY = "USD";
  const LIMIT = 10;
  const url = `https://api.coinstats.app/public/v1/coins?skip=0&limit=${LIMIT}&currency=${CURRENCY}`;
  const ARS_CCL = 200;

  const tableHeaders = [
    { name: "Rank", align: "left" },
    { name: "Icon", align: "left" },
    { name: "Name", align: "left" },
    { name: "Change", align: "right" },
    { name: "Price", align: "right" },
    { name: "More Info", align: "center" },
  ];

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        const coinsData = data.coins.map((coin) => {
          return {
            id: coin.id,
            icon: coin.icon,
            name: coin.name,
            price: coin.price,
            priceArs: coin.price * ARS_CCL,
            priceChange1d: coin.priceChange1d,
            priceChange1h: coin.priceChange1h,
            priceChange1w: coin.priceChange1w,
            rank: coin.rank,
            symbol: coin.symbol,
            twitterUrl: coin.twitterUrl,
            websiteUrl: coin.websiteUrl,
          };
        });
        setCoinsList(coinsData);
        setLoading(false);
      });
  }, [url]);

  return (
    <>
      {loading ? (
        <LoadingProgress />
      ) : (
        <CoinsList tableHeaders={tableHeaders} tableRows={coinsList} />
      )}
    </>
  );
};

export default CoinsListContainer;
