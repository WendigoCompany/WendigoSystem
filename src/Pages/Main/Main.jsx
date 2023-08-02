import { getParams } from "../../functions/Params";
import manager_gallery, { get_gallery, move_to } from "../../DB/db_manager";
import { wendigo_logo } from "../../DB/logos";
import "./css/manifiest.css";
import { useRezise } from "../../Context/Mobile";

let gallery;

export default function Main() {
  const params = getParams("main");
  try {
    gallery = get_gallery("main");
  } catch (error) {
    move_to("error");
  }

  const device = useRezise();

  return (
    <div>
      <img src={wendigo_logo} className={`background background-${device}`} />

      <h1 className={`main-title main-title-${device}`}>WENDIGO SYSTEM</h1>

    <div className={`center`}>
    <button
        onClick={() => {
          manager_gallery(params.id);
        }}
        className={`btn btn-${device} btn-acc-gall btn-acc-gall-${device}`}
      >
        ACCESS TO GALLERY
      </button>
    </div>

        <div>
          <h3>DOWLOAD GALLERY</h3>
        </div>



    </div>
  );
}

// const box = document.getElementById('target');

// document.addEventListener('mousemove', (e) => {
//   box.style.left = e.clientX + 'px';
//   box.style.top = e.clientY + 'px';
// })

// document.addEventListener('touchmove', (e) => {
//   box.style.left = e.touches[0].clientX + 'px';
//   box.style.top = e.touches[0].clientY + 'px';
// })
