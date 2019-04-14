import React, { Component } from "react";
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
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.4);
  }
`;

const Info = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-top: 40px;
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

class UploadFiles extends Component {
  state = {
    uploaded: false,
    files: null,
    event: null,
    width: null,
    height: null
  };

  _upload = () => {
    const files = document.getElementById("uploadFileBtn").files;

    const img = document.createElement("img");
    img.src = window.URL.createObjectURL(files[0]);
    img.style.maxHeight = "60vh";

    const div = document.getElementById("container");
    div.innerHTML = "";
    div.appendChild(img);

    const that = this;
    const cropper = new Cropper(img, {
      zoomable: false,
      viewMode: 1,
      ready() {
        that.setState({
          width: img.naturalWidth,
          height: img.naturalHeight,
          uploaded: true,
          files
        });
      },
      crop(event) {
        that.setState({
          event
        });
      }
    });
  };

  _sizeCheck = () => {
    const { event, files, width, height } = this.state;
    let checkCnt = 0;

    for (const file of files) {
      const image = new Image();
      image.src = window.URL.createObjectURL(file);
      image.onload = () => {
        //FIXME: Don't make functions within a loop
        console.log(
          `${file.name} - ${width} x ${height} : ${image.width} x ${
            image.height
          }`
        );
        if (height !== image.height || width !== image.width) {
          alert("이미지들의 크기가 서로 다릅니다 ! 다시 선택해주세요 !");
          return false;
        } else {
          checkCnt++;

          if (checkCnt === files.length) {
            this._crop();
          }
        }
      };
    }
  };

  _crop = () => {
    //TODO: 이미지 사이즈 체크 & 업로드 & 자르기 중에 Loader 표시
    console.log("CROPPED");
  };

  render() {
    const { uploaded, files } = this.state;

    return (
      <>
        <UploadFileBtn
          type="file"
          id="uploadFileBtn"
          accept="image/*"
          onChange={this._upload}
          multiple
        />
        <Label htmlFor="uploadFileBtn">
          <i className="far fa-images" />
          Choose images !
        </Label>

        <Container id="container" />
        {uploaded ? (
          <>
            <Info>
              <span role="img" aria-label="clap">
                👏
              </span>{" "}
              대표이미지를 포함해 사진 {files.length}
              장이 선택되었습니다.
            </Info>
            <CropBtn id="cropBtn" onClick={this._sizeCheck}>
              ✂ Crop !
            </CropBtn>
          </>
        ) : null}
      </>
    );
  }
}

export default UploadFiles;
