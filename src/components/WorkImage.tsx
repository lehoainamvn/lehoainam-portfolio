import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

interface Props {
  image?: string;
  alt?: string;
  video?: string;
  link?: string;
  highlights?: string[];
  problemSolved?: string;
  personalKnowledge?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  const hasImage = props.image && props.image.trim() !== "" && !props.image.includes("placeholder");

  if (!hasImage) {
    return (
      <div className="work-image">
        <a
          className="work-image-in work-text-card"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor={"disable"}
        >
          <div className="work-card-header">
            <div className="work-card-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <span className="work-card-title">SYSTEM ARCHITECTURE & FEATURES</span>
            {props.link && (
              <span className="work-card-github">
                <FaGithub /> Code <MdArrowOutward />
              </span>
            )}
          </div>
          <div className="work-card-body">
            {props.problemSolved && (
              <div className="work-card-block">
                <span className="work-card-label">🎯 PROBLEM SOLVED:</span>
                <p>{props.problemSolved}</p>
              </div>
            )}
            {props.highlights && props.highlights.length > 0 && (
              <div className="work-card-block">
                <span className="work-card-label">⚡ KEY HIGHLIGHTS:</span>
                <ul className="work-card-list">
                  {props.highlights.slice(0, 4).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </a>
      </div>
    );
  }

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img src={props.image} alt={props.alt} />
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </a>
    </div>
  );
};

export default WorkImage;
