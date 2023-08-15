const waitTime = (time)=>{
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(1);
    },time);
  })
}
export default waitTime;