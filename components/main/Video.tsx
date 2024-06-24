import React from "react";
import VideoCard from "../sub/VideoCard";

const Video = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-5 pb-20" id="video">
      <h1 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">
        Algunos Videos...
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 px-10">
        <VideoCard youtubeUrl="https://youtu.be/oXCdFXI1zfc?si=41fKLRTvORW666jz" />
        <VideoCard youtubeUrl="https://youtu.be/SMRqRje_87k?si=tbRbv2sy9gDQRPhI" />
        <VideoCard youtubeUrl="https://youtu.be/CMo-NY7dZPQ?si=9_APxIuKlcpt2_OL" />
        <VideoCard youtubeUrl="https://youtu.be/iHwYySQT-tY?si=dhKRWABH1_yPxtap" />
        <VideoCard youtubeUrl="https://youtu.be/MJSxLn_Nimw?si=8987IeeURU6SoeBq" />
        <VideoCard youtubeUrl="https://youtu.be/lEHTAAoBsgY?si=2B4H8MkCmm43a3T9" />
        <VideoCard youtubeUrl="https://youtu.be/DFFhTAHYaGg?si=-wGbb5F7PmNs293O" />
        <VideoCard youtubeUrl="https://youtu.be/Ad6Ma1E28QI?si=ZI-PtrFM5Emq2TBt" />
        <VideoCard youtubeUrl="https://youtu.be/w2EgeURP6tY?si=nHXZN_qrfTWV7RkN" />
      </div>
    </div>
  );
};

export default Video;
