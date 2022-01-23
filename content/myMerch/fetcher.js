import myMerch from "./index.json";

export const getAllMerch = () => {
  return {
    data: myMerch,
    myMerchMap: myMerch.reduce((accumulator, merch, i) => {
      accumulator[merch.id] = merch;
      accumulator[merch.id].index = i;
      return accumulator;
    }, {}),
  };
};
