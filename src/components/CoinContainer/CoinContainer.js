import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../CoinInfo/CoinInfo";

const CoinContainer = () => {
  const { id } = useParams();

  const [coinInfo, setCoinInfo] = useState();
  const [loading, setLoading] = useState(true);

  const CURRENCY = "USD";
  const url = `https://api.coinstats.app/public/v1/coins/${id}?currency=${CURRENCY}`;

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setCoinInfo(data.coin);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <p>La información se esta cargando</p>
      ) : (
        <CoinInfo coinInfo={coinInfo} />
      )}
    </>
  );
};

export default CoinContainer;
