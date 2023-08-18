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
  const auth = JSON.parse(sessionStorage.getItem("disclaim"));

  if(auth === null){
    sessionStorage.setItem("origin", "main")
    move_to(`?id=${params.id}`);
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

      <div className={`center`}>
        <h3 className={`subt subt-dowl-${device}`}>HD DOWLOAD LINKS:</h3>
      </div>

      <div className={`center`}>
        {gallery.links.map((link, i) => {
          return (
            <div
              key={`logo-${i}-img`}
              style={{
                display: device === "desk" ? "inline-block" : "",
              }}
            >
              <img
                src={link.logo}
                alt=""
                className={`comp-logo comp-logo-${device}`}
                onClick={() => {
                  window.open(link.link, '_blank');

                }}
              />
            </div>
          );
        })}
        {/*
         <img src={gallery.links[0].logo} alt="" className={`comp-logo comp-logo-${device}`} />
        {(device === 'mob') ? (<br></br>) : ('')}
        <img src={gallery.links[1].logo} alt="" className={`comp-logo  comp-logo-${device}`} /> 
        */}
      </div>

 
{(device === "desk") ?(     <div className={`shortc-cont shc-ele`}>
        <h3 className="shc-ele">SHORCUTS</h3>
        <h3 className="shc-ele">{`A // LEFT ARROW [PREV IMAGE]` }</h3>
        <h3 className="shc-ele">{`D // RIGHT ARROW [NEXT IMAGE]` }</h3>
        <h3 className="shc-ele">{`OR SLIDE THE MOUSE ` } <br></br> {"TO CHANGE IMAGE"}</h3>
      </div>) : ("")}

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
