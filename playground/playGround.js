const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("promise is resolved!");
      resolve("Done!");
    }, 2000);
  });
};

setTimeout(() => {
  console.log("Timer is done");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => console.log(text2));
}, 5000);
