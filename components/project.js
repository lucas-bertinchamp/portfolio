import "./project.css";
import Image from "next/image";

export default function ProjectComponent({ params }) {
  return (
    <a href={params.link} className="main-box">
      <img src={params.image} width={500} className="image" />
      <div className="text-box">
        <h3 className="title">{params.title}</h3>
        <p className="description">{params.description}</p>
      </div>
    </a>
  );
}
