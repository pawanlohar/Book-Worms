 import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import app_config from "../config";
import Swal from "sweetalert2";
import { useState } from "react";

const AddNovel = () => {
  const novelform = {
     
  };

  const url = app_config.api_url;

  const [thumbnail,setThumbnail] = useState("");
  const [novel, setNovel] = useState("");

  const novelSubmit = (values) => {
    values.thumbnail = thumbnail;
    values.file = novel;
    console.log(values);

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/novel/add", reqOpt)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Novel Added Successfully!",
        });
      });
  };

  const uploadThumbnail = (e) => {
    let formdata = new FormData();
    let file = e.target.files[0];
    setThumbnail(file.name);
    formdata.append("file", file);

    fetch(url + "/util/uploadfile", { method: "POST", body: formdata })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const uploadNovel = (e) => {
    let formdata = new FormData();
    let file = e.target.files[0];
    setNovel(file.name);
    formdata.append("file", file);

    fetch(url + "/util/uploadfile", { method: "POST", body: formdata })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div class="container mt-5">
      <div class="card">
        <div class="row">
          <div class="col-md">
            <div class="img-back"></div>
          </div>

          <div class="col-md">
            <div class="card-body my-card-body">
              <p class="text-muted">Add New Novel</p>

              <hr />

              <Formik initialValues={novelform} onSubmit={novelSubmit}>
                {({ values, handleSubmit, handleChange }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      className="w-100 mt-5"
                      variant="filled"
                      id="title"
                      type="text"
                      label="Video Title"
                      onChange={handleChange}
                      value={values.title}
                    />

                    <TextField
                      className="w-100 mt-5"
                      variant="filled"
                      id="description"
                      type="text"
                      label="Video Description"
                      onChange={handleChange}
                      value={values.description}
                    />

                    <label className="mt-5">Upload Thumbnail</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={uploadThumbnail}
                    />

                    <label className="mt-5">Upload Novel</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={uploadNovel}
                    />

                    <Button
                      color="primary"
                      variant="contained"
                      className="mt-5 w-100"
                      type="submit"
                    >
                      Add Novel
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNovel;