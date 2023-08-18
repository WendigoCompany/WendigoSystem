import { gDrive_logo, mega_logo } from "../logos";
import imgs from "./gallery.json";

const basic_url =
  "https://raw.githubusercontent.com/WendigoCompany/Assets/main/Waifu%20Classicated/yato_tohka/";



export const gallery = {
  basic_url: basic_url,
  gallery: imgs,
  id : "test",
  links : [
  {
    link : 'https://mega.io/es/',
    logo : mega_logo
  },
  {
    link : 'https://www.google.com/intl/es/drive/',
    logo : gDrive_logo
  }    
  ]
};