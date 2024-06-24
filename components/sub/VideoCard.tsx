import React from "react";
import CardVideo from "./CardVideo";
import ButtonVideo from "./ButtonVideo";

interface Props {
  youtubeUrl: string;
}

const VideoCard = ({ youtubeUrl }: Props) => {
  const getVideoId = (url: string) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match && match[1];
  };

  const videoId = getVideoId(youtubeUrl);

  return (
    <CardVideo>
      <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div className="relative aspect-w-16 aspect-h-9">
        <iframe
          width="100%" 
          height="auto"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Video YouTube SonolaSR"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4">
        <div className="flex justify-center"> 
          <ButtonVideo>
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 rounded inline-block"
            >
              Ver en YouTube
            </a>
          </ButtonVideo>
        </div>
      </div>
    </div>
    </CardVideo>
  );
};

export default VideoCard;

