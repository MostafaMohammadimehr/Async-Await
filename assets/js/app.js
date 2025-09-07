const firstfunction = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`firstfunction completed`);
      res(`res after 2 sec`);
    }, 2000);
  });
};

const secondfunction = async () => {
  console.log(`calling firstfunction`);
  const firstfunctionresult = await firstfunction();
};
secondfunction();
