import { useRezise } from "../../Context/Mobile";
import { get_gallery, get_img } from "../../DB/db_manager";
import { gbid } from "../../functions/htmlSelectors";
import "./css/manifiest.css";

let i = 0;
let double_touch = true;

export default function Visual() {
  const gallery = get_gallery("visual");
  const img_url = get_img(gallery, i);
  const device = useRezise();
  let touch;



  let key_stoper = false;

  window.onkeydown = (e) => {
    if(!key_stoper && window.location.href.includes('visual')){
      switch(e.key.toLowerCase()){
        case "arrowleft":
          case "a":
          changeImg("-");
          break;
          case "arrowright":
            case "d":
            changeImg("+");
            break;
      }
      
      

      key_stoper = true;
      setTimeout(() => {
        key_stoper = false;
      }, 300);
    }
  };

  const changeAnimation = (img) => {
    const int = setInterval(() => {
      try {
        const image_element = gbid("image");
        if (image_element !== null) {
          image_element.style.margin = "0vh 0vh 0vh 200vw";
          document.body.style.overflow = "hidden";
          setTimeout(() => {
            image_element.src = img;
            image_element.onload = () => {
              image_element.style.margin = "0vh 0vh 0vh 0vw";
              document.body.style.overflow = "auto";
            };
            clearInterval(int);
          }, 500);
        }
      } catch (error) {}
    }, 10);
  };

  const changeImg = (direction) => {
    let img;
    if (direction === "+") {
      i += 1;
      if (gallery.gallery.length - 1 < i) {
        i = 0;
      }
    } else if (direction === "-") {
      i -= 1;
      if (i < 0) {
        i = gallery.gallery.length - 1;
      }
    }
    img = get_img(gallery, i);
    changeAnimation(img);
  };

  return (
    <div>
      <img
        id="image"
        referrerPolicy="no-referrer"
        onDragStart={(e) => {
          touch = e.clientX;
        }}
        onDragEnd={(e) => {
          if (touch > e.clientX && touch - e.clientX > 80) {
            changeImg("+");
          } else if (touch < e.clientX && e.clientX - touch > 80) {
            changeImg("-");
          }
        }}
        onTouchStart={(e) => {
          touch = e.changedTouches[0].screenX;
          // if (e.touches.length > 1) {
          //   double_touch = true;
          // } else {
          //   double_touch = false;
          // }
          double_touch = e.touches.length > 1;
        }}
        // WORK IN ZOOM IN ZOOM OUT
        onTouchEnd={(e) => {
          if (
            touch > e.changedTouches[0].screenX &&
            touch - e.changedTouches[0].screenX > 200 &&
            !double_touch
          ) {
            changeImg("+");
          } else if (
            touch < e.changedTouches[0].screenX &&
            e.changedTouches[0].screenX - touch > 200 &&
            !double_touch
          ) {
            changeImg("-");
          }
        }}
        src={img_url}
        className={`img img-${device} dbl-tap-zoom`}
        alt=""
      />
    </div>
  );
}
