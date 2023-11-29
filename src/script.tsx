import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const AnotherBySideScript = () => {
  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          src="https://bywe2.byside.com/agent/bwc_we2.js"
          async
        ></script>
        <script>
          {`var bysideWebcare_webcare_id="7B0E5D0519",bysideWebcare_lang="pt",bysideWebcare_channel="kiavibe"`}
        </script>
      </Helmet>
    </>
  );
};

export default AnotherBySideScript;
