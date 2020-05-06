import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import ImageSearch from "@material-ui/icons/ImageSearch";
import Tooltip from "@material-ui/core/Tooltip";

export default function UploadImage() {
  const imageRef = useRef();
  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    console.log(image.name);
    // TODO: Handle Dispatch
  };
  return (
    <div>
      <input
        ref={imageRef}
        type="file"
        name="profile_pic"
        id="imageInput"
        hidden="hidden"
        onChange={handleImageUpload}
      />
      <label htmlFor="outlined-button-file">
        <Tooltip title="select an image" placement="top">
          <Button
            variant="outlined"
            component="span"
            onClick={() => imageRef.current.click()}
          >
            <ImageSearch />
          </Button>
        </Tooltip>
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
}
