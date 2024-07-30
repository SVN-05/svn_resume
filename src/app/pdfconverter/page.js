"use client";
import React, { useRef } from "react";
import { Button } from "@chakra-ui/react";
import PdfTemplate from "./components/PdfTemplate";
import { pdf } from "@react-pdf/renderer";
import QRCode from "react-qr-code";
import * as htmlToImage from "html-to-image";
import Image from "next/image";

const PdfConverter = () => {
  const url = "https://www.payrentz.com/";
  const qrCodeRef = useRef(null);
  const logoRef = useRef(null);

  const convertToBase64 = async (ref) => {
    const base64Image = await htmlToImage
      .toPng(ref.current)
      .then((dataUrl) => {
        return dataUrl;
      })
      .catch((error) => {
        console.error("Error converting to Base64:", error);
      });
    return base64Image;
  };

  const downloadPdf = async () => {
    const qrCode_base64 = await convertToBase64(qrCodeRef);
    const logo_base64 = await convertToBase64(logoRef);
    const doc = (
      <PdfTemplate logo_base64={logo_base64} qrCode_base64={qrCode_base64} />
    );
    const blob = await pdf(doc).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
    // a.href = url;
    // a.download = "example.pdf";
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a); // Clean up the temporary link
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[595px] mx-auto mt-20">
        <div
          style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
          className="flex px-3 py-2 bg-[#f3f7ff] rounded-tl rounded-tr items-center justify-end"
        >
          <Button onClick={downloadPdf}>Download</Button>
        </div>
        <PdfTemplate />
      </div>
      <div ref={qrCodeRef}>
        <QRCode value={url} />
      </div>
      <Image
        ref={logoRef}
        width={126}
        height={33}
        src={"/pdfTemplates/logo.svg"}
      />
    </div>
  );
};

export default PdfConverter;
