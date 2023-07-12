const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/ddvlw1otr/auto/upload";
const CLOUDINARY_UPLOAD_PRESET = "vconnect";

export const uploadMedia = async (media) => {
  const formData = new FormData();

  formData.append("file", media , media.name);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  formData.append("folder", "social-media");

  try {
    const res = await fetch(CLOUDINARY_URL, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data;
  } catch (e) {
     console.error(e);
  }
};
