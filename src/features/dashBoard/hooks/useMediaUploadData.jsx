const useMediaUploadData = () => {
  const getVideoFiles = (files) => {
    let allPromise = [];
    let videoFile = files;

    return new Promise((resolve, reject) => {
      if (!videoFile) {
        reject("file needed to continue");
      }

      for (let file of files) {
        let size = convertToMb(file.size);
        if (size > 50) {
          reject("large file");
          return;
        }
      }

      for (let i = 0; i < files.length; i++) {
        allPromise.push(decodeFile(files[i]));
      }

      Promise.all(allPromise)
        .then((result) => [resolve(result)])
        .catch((err) => reject(err));
    });
  };

  const convertToMb = (fileSize) => {
    return (fileSize / 1024 ** 2).toFixed(2);
  };

  const decodeFile = async (file) => {
    let vFile = file;
    return new Promise((res, rej) => {
      if (!vFile) {
        rej("failed");
      }
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        res({ fileName: file.name, fileData: e.target.result.split(",")[1] });
      };

      fileReader.readAsDataURL(file);
    });
  };

  return { getVideoFiles };
};

export default useMediaUploadData;
