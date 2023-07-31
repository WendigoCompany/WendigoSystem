import { getParams } from "../../functions/Params";
import manager_gallery, {  } from "../../DB/db_manager";


export default function Main() {

  const params = getParams('main');

  manager_gallery(params.id);


  
  return (
    <div>

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
