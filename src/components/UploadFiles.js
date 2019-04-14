import React from "react";
import styled from "styled-components";
import Cropper from "cropperjs";

const UploadFileBtn = styled.input`
  display: none;
`;

const CropBtn = styled.button`
  background-color: #f6c84b;
  color: #444;
  padding: 18px 28px;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  margin: 40px 0px;
  display: none;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.4);
  }
`;

const Label = styled.label`
  display: inline-block;
  cursor: pointer;
  background-color: #d3394c;
  padding: 18px 28px;
  margin: 40px 0px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    background-color: #722040;
  }

  i {
    margin-right: 10px;
  }
`;

const Container = styled.div``;

const Uploaded = () => {
  //TODO: 선택한 이미지들 크기가 모두 같은지 확인
  // 하나 선택했을 경우엔 무시하기
  const div = document.getElementById("container");
  const cropBtn = document.getElementById("cropBtn");
  cropBtn.style.display = "inline-block";

  const files = document.getElementById("uploadFileBtn").files;

  const img = document.createElement("img");
  img.src = window.URL.createObjectURL(files[0]);
  img.style.maxHeight = "50vh";

  div.appendChild(img);
  const cropper = new Cropper(img, {
    aspectRatio: 16 / 9,
    zoomable: false,
    viewMode: 1
  });
};

export default () => (
  <>
    <UploadFileBtn
      type="file"
      id="uploadFileBtn"
      accept="image/*"
      onChange={Uploaded}
      multiple
    />
    <Label for="uploadFileBtn">
      <i class="far fa-images" />
      Choose images !
    </Label>

    <Container id="container" />
    <CropBtn id="cropBtn">✂ Crop !</CropBtn>
  </>
);
