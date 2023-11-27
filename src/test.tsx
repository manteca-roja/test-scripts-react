import { useEffect } from "react";
import React from "react";
export default function ScriptWithComponent() {
  useEffect(() => {
    const firstScript = document.createElement("script");
    firstScript.text = `
          var
          bysideWebcare_webcare_id="7B0E5D0519",bysideWebcare_lang="pt",bysideWebcare_channel="kiavibe"
          
        `;

    document.head.appendChild(firstScript);

    const secondScript = document.createElement("script");
    secondScript.src = "https://bywe2.byside.com/agent/bwc_we2.js";
    secondScript.async = true;

    document.head.appendChild(secondScript);

    return () => {
      document.head.removeChild(firstScript);
      document.head.removeChild(secondScript);
    };
  }, []);

  return <></>;
}
