"use client";
import { useState } from "react";
import "./cvpage.css";

export default function CvPage({ params: { lang } }) {
  const cvPath = "/pdf/cv/Lucas_Bertinchamp_CV.pdf";

  return (
    <div className="all-box">
      <div className="cv-header">{lang === "en" ? "My resume" : "Mon CV"}</div>
      <div className="cv-box">
        <iframe src={cvPath} className="cv" />
      </div>
    </div>
  );
}
