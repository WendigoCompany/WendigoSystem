import { json } from "react-router-dom";

const elem = [];
const pasd = (e)=>{
    let p = {};
    for (let i = 0; i < e.changedTouches.length; i++) {
      p.changedTouches = {
        clientX: e.changedTouches[i].clientX,
        clientY: e.changedTouches[i].clientY,
        radiusX: e.changedTouches[i].radiusX,
        radiusY: e.changedTouches[i].radiusY,
        screenX: e.changedTouches[i].screenX,
        screenY: e.changedTouches[i].screenY,
      };
    }

    elem.push(JSON.stringify(p));
    elem.push("\n------------------------------------------------------------------------------------------------\n");
};

export default function Error() {
  return (
    <div
      style={{
        padding: "10%",
        backgroundColor: "aqua",
      }}
      onTouchStart={(e) => {
        // const elem = [];
        // pasd(e)
        e.target.textContent = e.touches.length;
      }}
      onTouchEnd={(e) => {
        // pasd(e)
        // elem.push("\n-----------------------------END-------------------------------------------------------\n");

        // e.target.textContent = e.touches.length;

      }}
    >
      {/* <div>FAIL TO CHARGE THE GALLERY</div> */}
    </div>
  );
}
