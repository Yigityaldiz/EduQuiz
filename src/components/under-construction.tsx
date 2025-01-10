import Lottie from "react-lottie";
import animationData from "./lotties/under-construction.json";

export default function LottieUnderConstruction() {
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Lottie options={defaultLottieOptions} height={400} width={400} />
      <p className="uppercase text-4xl font-bold text-gray-700 text-center">
        Please be patient, this page <br /> is under construction.{" "}
        <span role="img" aria-label="construction">
          🚧
        </span>
      </p>
    </div>
  );
}
