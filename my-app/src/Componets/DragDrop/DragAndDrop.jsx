import React, { useState } from 'react';
import '../../DragAndDrop.css'; // Import CSS file for styles

const DragAndDrop = () => {
  const [images, setImages] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const validFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
    setImages([...images, ...validFiles]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    const validFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
    setImages([...images, ...validFiles]);
  };

  return (
    <div className='DAD '>

      {/* WHITE BLURS */}
      <div className='circle rounded-full w-[200px] h-[400px]  absolute left-[0%] bottom-[0%] z-666   blur-[110px]'></div>
      <div className='circle1 rounded-full w-[200px] h-[400px]  absolute right-[0%] top-[0%] z-666   blur-[110px]'></div>

      <div className='flex'>

        <div className='drag-and-drop '>
          <div className="drop-zone"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <h1>Drag & Drop Images Here</h1>

            <div className="image-preview">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index}`}
                  className="preview-image"
                />
              ))}
            </div>
            <div className="file-input-container">
              <label htmlFor="file-input" className="choose-files-button">Choose Files</label>
              <input type="file" id="file-input" multiple onChange={handleFileInputChange} />
            </div>
          </div>
        </div>

        <div className="empty-zone bg-white/50 z-10  backdrop-blur-[300px] " >
        <h1>Details of the Patient</h1>
        <div className='patientDetails'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis provident beatae modi libero non voluptatum fugiat ad eius facilis quos culpa dolor vel, distinctio nihil ipsum voluptates quasi et.</div>
        </div>

      </div>
    </div>
  );
};

export default DragAndDrop;
