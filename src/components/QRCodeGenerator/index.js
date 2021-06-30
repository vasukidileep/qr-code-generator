import React, { useState } from "react";
import QRCode from "qrcode.react";
import URLText from "../URLText";

const QRCodeGenerator = () => {
  const [value, setValue] = React.useState("");

  const [activationUrl, setActivationUrl] = useState("");

  const [downloadStatus, setDownloadStatus] = useState(false);

  const handleChange = (event) => {
    if (event.target.value === "") {
      setActivationUrl("");
      setDownloadStatus(false);
    }
    setValue(event.target.value);
  };

  const handleClick = () => {
    setActivationUrl(value);
    setDownloadStatus(true);
  };

  const handleDownload = () => {
    const canvas = document.getElementById("activation_url");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "activation_url.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <div>
        <URLText
          handleClick={handleClick}
          handleChange={handleChange}
          handleDownload={handleDownload}
          value={value}
          downloadStatus={downloadStatus}
        />
        <hr />
        {activationUrl && (
          <div>
            <QRCode
              id="activation_url"
              level={"H"}
              includeMargin={true}
              value={activationUrl}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
