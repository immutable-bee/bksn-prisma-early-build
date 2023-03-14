import VNavBar from "../compontents/VNavBar";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { useState, useEffect } from "react";

const UploadInvPage = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [csvFile, setCsvFile] = useState();
  const [csvArray, setCsvArray] = useState([]);

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
  /*
  useEffect(() => {
    uploader(csvArray);
  }, [csvArray]);
  
  const uploader = async (arr) => {
    const inventoryCollection = collection(db, "inventory");
    const inventoryCountSnapshot = await getCountFromServer(
      inventoryCollection
    );
    const count = inventoryCountSnapshot.data().count;
    const nextId = count + 1;
    arr.map(async (item) => {
      if (item.Author != undefined) {
        await addDoc(collection(db, "inventory"), {
          id: nextId,
          dateListed: item["Date Listed"],
          sku: item.SKU,
          title: item.Title,
          isbn: item.ISBN,
          author: item.Author,
          condition: item.Condition,
          format: item.Format,
          notes: item.Notes,
          price: item.Price.slice(0, -2),
        });
      }
    });
  };
*/
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
            <div id="upload-box">
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
                id="choose-file-input"
                type={"file"}
                name={"file"}
                accept=".csv"
                onChange={(e) => {
                  setCsvFile(e.target.files[0]);
                }}
              ></Input>
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
