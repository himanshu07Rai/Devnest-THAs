import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Meme = ({ meme, setMeme }) => {
  const [form, setForm] = useState({
    template_id: meme.id,
    username: "teasty",
    password: "PPS$Asr52ttCfaF",
    boxes: [],
  });
  const notify = () => toast("Fill atleast 1 field!");

  const generateMeme = async () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map((box, index) => {
      url += `&boxes[${index}][text]=${box.text}`;
    });
    // console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    // if (CheckForToast(data)) return;
    if (!data.success) {
      notify();
      return;
    }
    setMeme({ ...meme, url: data.data.url });
    // form.boxes.map(() => {});
  };
  return (
    <div className="meme">
      <img src={meme.url} />
      <div>
        {[...Array(meme.box_count)].map((_, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Meme Caption ${index + 1}`}
            onChange={(e) => {
              const newBoxes = form.boxes;
              newBoxes[index] = {
                text: e.target.value,
              };
              setForm({ ...form, boxes: newBoxes });
            }}
          />
        ))}
      </div>
      <div>
        <button onClick={generateMeme}>Generate Meme</button>
        <button
          onClick={() => {
            setMeme(null);
          }}
        >
          Choose Template
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Meme;
