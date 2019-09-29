import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageDrop = () => {

  const onDrop = useCallback(file => {
    console.log(file);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({ onDrop });

  return (
    <div id="uploadXray" {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  );
};

export default ImageDrop;
