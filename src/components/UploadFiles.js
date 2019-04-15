import React, { Component } from "react";
import styled from "styled-components";
import Cropper from "cropperjs";
import Jimp from "jimp/es";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import Loader from "./Loader";

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
    checkCnt: 0,
    loading: false,
    current: 0
  };

  _sizeCheck = (image, width, height) => {
    const { checkCnt } = this.state;

    if (height !== image.height || width !== image.width) {
      this.setState({
        checkCnt: 0
      });
    } else {
      this.setState({
        checkCnt: checkCnt + 1
      });
    }
  };

  _upload = () => {
    this.setState({
      checkCnt: 0
    });

    const files = document.getElementById("uploadFileBtn").files;
    const div = document.getElementById("container");
    div.innerHTML = "";

    if (files.length !== 0) {
      const firstImg = document.createElement("img");
      firstImg.src = window.URL.createObjectURL(files[0]);
      firstImg.style.maxHeight = "60vh";

      div.appendChild(firstImg);

      const that = this;
      new Cropper(firstImg, {
        zoomable: false,
        viewMode: 1,
        ready() {
          that.setState({
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

      for (const file of files) {
        const image = new Image();
        image.onload = () => {
          this._sizeCheck(image, firstImg.naturalWidth, firstImg.naturalHeight);
        };
        image.src = window.URL.createObjectURL(file);
      }
    } else {
      this.setState({
        uploaded: false,
        files: null,
        event: null
      });
    }
  };

  _crop = async () => {
    const { checkCnt, files, event } = this.state;

    if (files.length === checkCnt) {
      this.setState({
        loading: true
      });

      const zip = new JSZip();
      const { detail } = event;
      const that = this;

      for (let i = 0; i < files.length; i++) {
        const image = await Jimp.read(window.URL.createObjectURL(files[i]));
        image.crop(detail.x, detail.y, detail.width, detail.height);
        await image.getBuffer(image.getMIME(), (err, data) => {
          zip.file(files[i].name, data, { base64: true });
          this.setState({
            current: i + 1
          });
          console.log(data);
        });
      }

      zip.generateAsync({ type: "blob" }).then(function(content) {
        saveAs(content, "Crop-At-Once.zip");
        that.setState({
          loading: false,
          current: 0
        });
      });
    } else
      alert("이미지들의 크기가 서로 다릅니다!\n이미지를 다시 선택해주세요!");
  };

  render() {
    const { loading, uploaded, files, current } = this.state;

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
              <span role="img" aria-label="clap" style={{ marginRight: "5px" }}>
                👏
              </span>
              대표 이미지를 포함해 <u>사진 {files.length}장</u>이
              선택되었습니다.
            </Info>
            <CropBtn id="cropBtn" onClick={this._crop}>
              <i class="fas fa-cut" /> 싹둑싹둑
            </CropBtn>
          </>
        ) : null}

        {loading ? (
          <Loader
            current={current}
            length={files.length}
            scrollY={window.scrollY}
          />
        ) : null}
      </>
    );
  }
}

export default UploadFiles;
