import React, { useEffect } from "react";

const BySideScript = () => {
  const addScriptToDocument = () => {
    setTimeout(() => {
      // Inline script with variables
      const inlineScript = document.createElement("script");
      inlineScript.text = `var bysideWebcare_webcare_id="7B0E5D0519",bysideWebcare_lang="pt",bysideWebcare_channel="fiat"`;
      inlineScript.async = true;
      inlineScript.nonce = "MTo3NzMwMToyOTM1MDE0NTU1OjE3MDEwNzI4ODU="; // Adding nonce value

      // Append the inline script to the head
      document.head.appendChild(inlineScript);

      // Function to execute when the external script is loaded
      const handleScriptLoad = () => {
        console.log("script loaded!");
        // Your code that depends on bysideWebcare_webcare_id goes here
        // bysideWebcare_createQueryStringParams();
      };

      // Load external script after the inline script
      const externalScript = document.createElement("script");
      externalScript.type = "text/javascript";
      externalScript.src = "/byside.js";

      externalScript.async = true;
      externalScript.nonce = "MTo3NzMwMToyOTM1MDE0NTU1OjE3MDEwNzI4ODU="; // Adding nonce value

      // Attach the onload event for modern browsers
      externalScript.onload = handleScriptLoad;

      // Append the external script to the head
      document.head.appendChild(externalScript);
    }, 5000);
  };

  useEffect(() => {
    addScriptToDocument();
  }, []);

  return <></>;
};

export default BySideScript;
