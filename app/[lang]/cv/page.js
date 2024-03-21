"use client";
import { useState } from "react";
import "./cvpage.css";

export default function CvPage({ params: { lang } }) {
  const cvPath =
    lang === "en"
      ? "/pdf/cv/LucasBertinchampCV-EN.pdf"
      : "/pdf/cv/LucasBertinchampCV-FR.pdf";

  return (
    <div className="all-box">
      <div className="cv-header">{lang === "en" ? "My CV" : "Mon CV"}</div>
      <div className="cv-box">
        <iframe src={cvPath} className="cv" />
      </div>
    </div>
  );
}
