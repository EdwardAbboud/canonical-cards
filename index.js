import fetchData from "./fetcher.js";
import createCard from "./createCard.js";

// this will format any date given to the desired outcome
const dateFormat = (date) => {
  const d = new Date(date);
  const options = { month: "long" };
  const month = new Intl.DateTimeFormat("en-US", options).format(d);
  const day = d.getDate();
  const year = d.getFullYear();
  const finalDate = `${day} ${month} ${year}`;

  return finalDate;
};

// Inject our generated cards into the root element
async function injectHTML() {
  const root = document.getElementById("root");

  const APIdata = await fetchData();

  for (let i = 0; i < APIdata.length; i++) {
    const fullDate = dateFormat(APIdata[i].date);

    let card = createCard(
      APIdata[i].featured_media,
      APIdata[i].link,
      APIdata[i].title.rendered,
      APIdata[i]._embedded.author[0].name,
      fullDate,
      APIdata[i].type
    );

    root.append(card);
  }
}

injectHTML();
