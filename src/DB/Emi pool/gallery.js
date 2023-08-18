import { fill_limit } from "../fill.db";
import { gDrive_logo, mega_logo } from "../logos";
import imgs from "./gallery.json";

const max_limit = [1,63];


export const gallery = {
  basic_url: "https://raw.githubusercontent.com/PowderMaid/emi-pool/main/",
  gallery: fill_limit(max_limit),
  id: "iepool1",
  links : [
  {
    link : 'https://mega.nz/folder/3mwQla7T#lqvsxzx6GJBAx6_I0O67-A',
    logo : mega_logo
  },
  {
    link : 'https://drive.google.com/drive/folders/1_NvCLEHue90dR43w3d9lTdNgVTb9dfe-?usp=drive_link',
    logo : gDrive_logo
  }    
  ]
};



