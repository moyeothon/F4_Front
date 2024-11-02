import React, { useState } from "react";
import styled from "styled-components";

interface ImgInputProps {
  initialImgSrc?: string;
}

const ImgInput: React.FC<ImgInputProps> = ({ initialImgSrc }) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(initialImgSrc);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImgSrc(previewUrl);
    }
  };

  return (
    <ImageBox>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        id="image-upload"
      />
      <Label htmlFor="image-upload">
        {imgSrc ? (
          <ImgPreview src={imgSrc} alt="Uploaded Image" />
        ) : (
          "이미지 업로드"
        )}
      </Label>
    </ImageBox>
  );
};

export default ImgInput;

const ImageBox = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  background: #adb5bd;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  &:hover {
    border-color: #6c757d;
  }
`;

const Label = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #6c757d;
  font-size: 14px;
  text-align: center;
`;

const ImgPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
