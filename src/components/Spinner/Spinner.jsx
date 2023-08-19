import { Vortex } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        wrapperClass="vortex-wrapper"
        colors={[
          "orange",
          "#009939",
          "#1313B7",
          "#F1CD00",
          "#D50201",
          "purple",
        ]}
      />
    </div>
  );
};

export default Spinner;
