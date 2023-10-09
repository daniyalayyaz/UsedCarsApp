import React from "react";

import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <TailSpin
        height="80"
        width="80"
        color="#4c545c"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        // visible={true}
      />
    </div>
  );
}
