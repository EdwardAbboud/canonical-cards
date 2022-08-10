// This will create as many cards as we want with the parameters we need
const createCard = (image, link, title, author, date, type) => {
  const card = document.createElement("div");
  card.innerHTML = `
    <div class="row ">
        <div class="col-4 " style="width: 400px;">
          <div class="p-card--highlighted box-shadow highlight-bar u-no-padding">
            <div class="p-card__inner top-padding u-no-padding--bottom ">
              <h5 class="p-card__inner u-no-padding--left u-no-padding--bottom">CLOUD AND SERVER</h5>
            </div>
            <div class="p-card__inner ">
              <hr class="u-no-margin--bottom"/>
            </div>
            <div class="p-card__inner u-no-padding--bottom u-no-padding--top">
              <img class="p-card__image" src=${image}  />
            </div>
            <div class="p-card__inner u-no-padding--top u-no-padding--bottom" style="height: 120px; overflow: hidden;">
              <a href="${link}"><h3 class="p-heading--4" style="font-weight: 300">${title}</h3></a>
            </div>
            <div class="p-card__inner p-heading--6 u-no-padding--top u-no-padding--bottom">
              by <a href="#">${author}</a> on ${date}
            </div>
             <div class="p-card__inner u-no-padding--top">
              <hr class="u-no-margin--bottom"/>
            </div>
            <div class="p-card__inner u-no-padding--top">
              ${type}
            </div>
          </div>
        </div>
      </div>
    `;

  return card;
};

export default createCard;
