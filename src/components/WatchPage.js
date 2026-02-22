import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const WatchPage = () => {
  const [searchparms] = useSearchParams();
  console.log(searchparms.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="px-5">
      <iframe
        width="850"
        height="450"
        src={`https://www.youtube.com/embed/${searchparms.get("v")}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
