
import { github_url } from "../../App";
import { useRezise } from "../../Context/Mobile";
import { getParams } from "../../functions/Params";
import "./css/manifiest.css";

const router_code = process.env.NODE_ENV === "development" ? "" : "#/";


 const move_to = (page) => {
  let url = github_url + router_code + page;
  window.location.href = url;
  setTimeout(() => {
    window.location.reload();
  }, 500);
};


export default function Disclaim() {
  const device = useRezise();
  const params = getParams("");


  return (
    <div>
<div className={` disclaim-title`}>
<h1 className={`disclaim-title-${device}  t-shadow-blacked`}>WELCOME TO <br/>WENDIGO VIEW SYSTEMS</h1>
</div>
<div className={`alert-img-cont`}>
<img
  className={`alert-img-${device} alert-img`}
  src="https://cdn-icons-png.flaticon.com/512/2299/2299283.png"
  alt=""
/>
</div>
<div style={{ textAlign: "center" }}>
<h3 className={`disclaim-${device} disclaim t-shadow-blacked`}>
  THIS SITE CONTAINS +18 CONTENT
</h3>
<button
  onClick={() => {
    move_to(`main?id=${params.id}`);
    
  }}
  className={`button outline disc-accept disc-accept-${device} t-shadow-blacked`}
>
  I AM +18 YEARS OLD
</button>
<br />
<button
  onClick={() => {
    window.location.href = "https://www.google.com";
  }}
  className={`button outline disc-cancel disc-cancel-${device} t-shadow-blacked`}
>
  I AM NOT +18 YEARS OLD
</button>
</div> 
    </div>
  );
}

{/* 







*/}
