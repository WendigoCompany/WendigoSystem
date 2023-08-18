import { github_url } from "../App";
import { getParams } from "../functions/Params";
import { gallery as test_gallery } from "./test/test_gallery";
import { gallery as Resting_on_the_hot_springs } from "./Resting on the hot springs/gallery";
import { gallery as Emi_pool } from "./Emi pool/gallery";

const router_code = process.env.NODE_ENV === "development" ? "" : "#/";

export const move_to = (page) => {
  let url = github_url + router_code + page;

  window.location.href = url;
  setTimeout(() => {
    window.location.reload();
  }, 500);
};

export const go_to_gallery = (page) => {
  let url = github_url + router_code + page;
  window.open(url, "_blank");
  // window.location.href = url;
  // setTimeout(() => {
  //   window.location.reload();
  // }, 500);
};

const stucture_data = () => {
  const db = [];
  db.push({
    id: test_gallery.id,
    gallery: test_gallery,
  });

  db.push({
    id: Resting_on_the_hot_springs.id,
    gallery: Resting_on_the_hot_springs,
  });

  db.push({
    id: Emi_pool.id,
    gallery: Emi_pool,
  });

  return db;
};

export default function manager_gallery(id) {
  const db = stucture_data();
  const validator = false;

  if (id === false) {
    move_to("error");
  } else {
    const gal_found = db.filter((gal) => gal.id === id)[0];
    if (gal_found !== undefined) {
      // move_to(`visual?id=${id}`);
      go_to_gallery(`visual?id=${id}`);
    } else {
      move_to("error");
    }
  }
}

export const get_gallery = (page) => {
  const db = stucture_data();
  const id = getParams(page).id;
  const gal_found = db.filter((gal) => gal.id === id)[0].gallery;
  return gal_found;
};

export const get_img = (gallery, i) => {
  return gallery.basic_url + gallery.gallery[i];
};
