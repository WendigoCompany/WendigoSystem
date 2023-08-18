export const fill_limit = (max_limit)=>{
    const arr = [];
    for (let i = max_limit[0]; i <= max_limit[1]; i++) {
      arr.push(`${i}.png`)
      
    }
    return arr;
  };
  