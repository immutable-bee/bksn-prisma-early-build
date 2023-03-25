import VNavBar from "../components/VNavBar";
import { Button, Input, Loading, Tooltip, Checkbox } from "@nextui-org/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { parse } from "papaparse";
import { useRouter } from "next/router";

const UploadInvPage = (id) => {
  const [csvFile, setCsvFile] = useState();
  const [csvArray, setCsvArray] = useState([]);
  const [uploadBoxClass, setUploadBoxClass] = useState();
  const [filePreview, setFilePreview] = useState("No File Selected");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [updateInventory, setUpdateInventory] = useState(false);

  const { data: session } = useSession();

  const router = useRouter();

  const resetUploadBox = () => {
    setCsvFile(null);
    setFilePreview("No File Selected");
    setLoading(false);
    setSuccessMessage("");
    setErrorMessage("");
  };

  const goToMyListings = () => {
    router.push("/listed-inventory");
  };

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
    setCsvFile(files[0]);
  };

  useEffect(() => {
    if (csvFile != undefined) {
      setFilePreview(`File: ${csvFile.name}`);
    }
  }, [csvFile]);

  const uploader = async () => {
    setLoading(true);
    try {
      await fetch("/api/makelisting", {
        method: "POST",
        body: JSON.stringify([session.user.email, csvArray, updateInventory]),
      });
      setLoading(false);
      setSuccessMessage("Upload successful!");
      setErrorMessage("");
    } catch (error) {
      setLoading(false);
      setErrorMessage("An error occurred during the upload.");
      setSuccessMessage("");
    }
  };

  const processCsv = (str) => {
    const parsedCsv = parse(str, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.toLowerCase(),
      transform: (value, header) => {
        if (header === "price") {
          const cleanedValue = value.replace(/[^0-9.]/g, "");
          return parseFloat(cleanedValue);
        }
        return value;
      },
    });

    const newArray = parsedCsv.data;
    setCsvArray(newArray);
  };

  const handleFileSelect = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const submit = async (e) => {
    const file = csvFile;
    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;

      processCsv(text);
    };
    reader.readAsText(file);
  };

  useEffect(() => {
    if (csvArray[0] != undefined) {
      uploader();
    }
  }, [csvArray]);

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
              {!loading && !successMessage && !errorMessage && (
                <>
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
                    onChange={(e) => {
                      handleFileSelect(e);
                    }}
                    style={{ display: "none" }}
                  ></Input>
                  <label id="file-input-label" for="choose-file-input">
                    Choose File
                  </label>
                  <h6 id="file-preview">{filePreview}</h6>
                </>
              )}
              {loading && (
                <div className="loading-container">
                  <Loading color="black" size="large" />
                </div>
              )}
              {(successMessage || errorMessage) && (
                <div
                  id="upload-api-message-container"
                  className={`message-container${
                    successMessage ? "success" : "error"
                  }`}
                >
                  <h5>{successMessage || errorMessage}</h5>
                  <Button
                    id="reset-upload-btn"
                    rounded
                    onClick={resetUploadBox}
                  >
                    Would you like to upload another file?
                  </Button>
                  <Button
                    id="post-upload-listings-link"
                    rounded
                    onClick={goToMyListings}
                  >
                    Go to my listings
                  </Button>
                </div>
              )}
            </div>
            <div id="checkbox-wrapper">
              <Tooltip
                id="update-inventory-tooltip"
                content="Check this box if you just want to update your inventory. This works by comparing the listings in your file to our database. Non existing listings will be added to our database, while listings in our database but not in your file will be removed."
                placement="top"
              >
                <Checkbox
                  size="xs"
                  id="update-inventory-checkbox"
                  onChange={() => setUpdateInventory((prevState) => !prevState)}
                >
                  Update Inventory
                </Checkbox>
              </Tooltip>
            </div>
            <Button
              rounded
              id="upload-inv-next-btn"
              disabled={loading || successMessage !== "" || errorMessage !== ""}
              onClick={(e) => {
                if (csvFile) submit(e);
              }}
            >
              Submit
            </Button>
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
                onChange={(e) => {
                  handleFileSelect(e);
                }}
                style={{ display: "none" }}
              ></Input>
              <label id="file-input-label" for="choose-file-input">
                Choose File
              </label>
              <h6 id="file-preview">{filePreview}</h6>
            </div>
            <Button
              rounded
              disabled={loading}
              id="upload-inv-next-btn"
              onClick={(e) => {
                //e.preventDefault();
                if (csvFile) submit(e);
              }}
            >
              Submit
            </Button>
            {csvArray.length > 0 ? null : null}
          </form>

*/
