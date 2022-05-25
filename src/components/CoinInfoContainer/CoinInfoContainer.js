import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../CoinInfo/CoinInfo";
import LoadingProgress from "../commons/LoadingProgress";

const CoinInfoContainer = () => {
  const { id } = useParams();

  const [coinInfo, setCoinInfo] = useState();
  const [loading, setLoading] = useState(true);

  const CURRENCY = "USD";
  const url = `https://api.coinstats.app/public/v1/coins/${id}?currency=${CURRENCY}`;
  const ARS_CCL = 200;

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        data.coin.priceArs = data.coin.price * ARS_CCL;
        setCoinInfo(data.coin);
        setLoading(false);
      });
  }, [id, url]);

  return (
    <>{loading ? <LoadingProgress /> : <CoinInfo coinInfo={coinInfo} />}</>
  );
};

export default CoinInfoContainer;
