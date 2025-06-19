import { useEffect, useState } from "react";

const GetUserMedia = (requestMedia) => {
  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    const enableVideoStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(requestMedia);

        setMediaStream(stream);
      } catch (error) {
        throw new Error(error);
      }
    };

    if (!mediaStream) {
      enableVideoStream();
    } else {
      return () => {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
      };
    }
  }, [mediaStream, requestMedia]);

  return mediaStream;
};

export default GetUserMedia;
