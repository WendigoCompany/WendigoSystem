import { useRezise } from "../../Context/Mobile";
import { get_gallery, get_img } from "../../DB/db_manager";
import { gbid } from "../../functions/htmlSelectors";



let i = 0;

export default function Visual() {
  const gallery = get_gallery("visual");
  const img_url = get_img(gallery, i);
  const device = useRezise();
  let touch;

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
      if ((gallery.gallery.length - 1 ) < i) {
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
        }}
        onTouchEnd={(e) => {
          if (
            touch > e.changedTouches[0].screenX &&
            touch - e.changedTouches[0].screenX > 100
          ) {
            changeImg("+");
          } else if (
            touch < e.changedTouches[0].screenX &&
            e.changedTouches[0].screenX - touch > 100
          ) {
            changeImg("-");
          }
        }}
        src={img_url}
        className={`img img-${device}`}
        style={{
          width: "100%",
          transition: "margin .4s, opacity .5s",
        }}
        alt=""
      />
    </div>
  );
}


