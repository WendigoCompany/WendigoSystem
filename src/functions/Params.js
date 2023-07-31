import { github_url } from "../App";

// const getPage = (param) => {
//     if (param == undefined) {
//       return 0;
//     } else {
//       return parseInt(param.replace("page=", ""));
//     }
//   };

const getProyectId = (param) => {
  if (param == undefined) {
    return false;
  } else {
    return param.replace("id=", "");
  }
};
const searchParam = (idParam, arrParams) => {
  const aux = arrParams.filter((param) => param.includes(idParam))[0];
  if (aux !== undefined) {
    return arrParams.indexOf(aux);
  } else {
    return -1;
  }
};

const paramsDerivations = (arrParams) => {
  let params = {};
  let paramsIndex = {
    id: searchParam("id", arrParams),
  };

  params.id = getProyectId(arrParams[paramsIndex.id]);
  return params;
};
export const getParams = (page) => {
  let params = window.location.href;
  params = params.replace(github_url + "#/" + page, "");
  params = params.replace(github_url + page, "");
  params = params.replace("?", "");

  params = params.split("&");
  const paramsFinal = paramsDerivations(params);

  return paramsFinal;
};
