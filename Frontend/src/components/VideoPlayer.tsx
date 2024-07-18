

interface VideoPlayerProps {
  src: string;
  type: string;
  width?: string;
  height?: string;
}

const VideoPlayer= ({ src, type, width = "600", height = "400" }:VideoPlayerProps) => {
  return (
    <video width={width} height={height}  loop autoPlay  >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
