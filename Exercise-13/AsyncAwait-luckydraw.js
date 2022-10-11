function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

async function getResults() {
  try {
    // in parallelo
    const results = await Promise.all([
      luckyDraw("Tina"),
      luckyDraw("Jorge"),
      luckyDraw("Julien"),
    ]);

    results.forEach((item) => console.log(item));

    //in serie
    // const result1 = await luckyDraw("Tina");
    // console.log(result1);
    // const result2 = await luckyDraw("Jorge");
    // console.log(result2);
    // const result3 = await luckyDraw("Julien");
    // console.log(result3);
  } catch (e) {
    console.log(e);
  }
}

getResults();
