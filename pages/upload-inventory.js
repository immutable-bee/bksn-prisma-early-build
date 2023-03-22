import VNavBar from "../components/VNavBar";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Script from "next/script";

const UploadInvPage = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [csvFile, setCsvFile] = useState();
  const [csvArray, setCsvArray] = useState([]);
  const [uploadBoxClass, setUploadBoxClass] = useState();
  const [filePreview, setFilePreview] = useState("No File Selected");

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setUploadBoxClass("highlight");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setUploadBoxClass("highlight");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setUploadBoxClass("");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let dt = e.dataTransfer;
    let files = dt.files;
    const file = files[0];
    setCsvFile(file);
  };

  useEffect(() => {
    if (csvFile != undefined) {
      setFilePreview(`File: ${csvFile.name}`);
    }
  }, [csvFile]);

  const processCsv = (str, delim = "|") => {
    const headers = str.slice(0, str.indexOf("\r")).split(delim);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    const newArray = rows.map((row) => {
      const values = row.split(delim);
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {});
      return eachObject;
    });
    setCsvArray(newArray);
  };

  const handleFileSelect = (e) => {
    let files = [...e.target.files];
    dispatch({ type: "ADD_FILE_TO_LIST", files });
  };

  const submit = () => {
    const file = csvFile;
    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;

      processCsv(text);
    };
    reader.readAsText(file);
  };

  return (
    <div id="upload-page-container">
      <VNavBar upload="active-btn" />
      <div id="upload-body-container">
        <h5 className="right-corner-page-title">Update Inventory</h5>
        <div id="update-inv-content-container">
          <h3 id="upload-content-title">Upload a CSV file</h3>
          <p id="upload-inv-instruction-text">
            To update the invenotry, please upload a CSV file containing your
            new inventory. You can download a CSV template below.
          </p>
          <form id="csv-form">
            <div
              id="upload-box"
              className={uploadBoxClass}
              onDragEnter={(e) => handleDragEnter(e)}
              onDragOver={(e) => handleDragOver(e)}
              onDragLeave={(e) => handleDragLeave(e)}
              onDrop={(e) => handleDrop(e)}
            >
              <Image
                src="/icons/icon-cloud.svg"
                alt="cloud icon"
                id="cloud-upload-icon"
                width={"34"}
                height={"34"}
              />
              <h5 id="upload-box-bold-txt">Select a CSV file to upload</h5>
              <h6 id="upload-box-txt">or drag and drop it here</h6>
              <Input
                size={""}
                id="choose-file-input"
                type={"file"}
                name={"file"}
                accept=".csv"
                onChange={(e) => handleFileSelect(e)}
                style={{ display: "none" }}
              ></Input>
              <label id="file-input-label" for="choose-file-input">
                Choose File
              </label>
              <h6 id="file-preview">{filePreview}</h6>
            </div>
            <Button
              rounded
              id="upload-inv-next-btn"
              onClick={(e) => {
                //e.preventDefault();
                if (csvFile) submit();
              }}
            >
              Submit
            </Button>
            {csvArray.length > 0 ? null : null}
          </form>
          <Button rounded id="download-csv-template-btn">
            Download a CSV Template
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadInvPage;

/*
["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

["dragenter", "dragover"].forEach((eventName) => {
  dropArea.addEventListener(eventName, highlight, false);
});
["dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight(e) {
  dropArea.classList.add("highlight");
}

function unhighlight(e) {
  dropArea.classList.remove("highlight");
}

dropArea.addEventListener("drop", handleDrop, false);

function handleDrop(e) {
  let dt = e.dataTransfer;
  let files = dt.files;
  const file = files[0];
  setCsvFile(file);
}

*/
