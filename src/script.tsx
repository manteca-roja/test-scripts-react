import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const AnotherBySideScript = () => {
  return (
    <>
      <Helmet>
        <script>
          {`var bysideWebcare_webcare_id="7B0E5D0519",bysideWebcare_lang="pt",bysideWebcare_channel="kiavibe"`}
        </script>
        <script type="text/javascript" src="/byside.js" async></script>
      </Helmet>
    </>
  );
};

export default AnotherBySideScript;
