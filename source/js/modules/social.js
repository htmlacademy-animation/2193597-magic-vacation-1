export default () => {
  let socialBlock = document.querySelector(`.js-social-block`);
  let socialBtn = document.querySelector(`.social-block__toggler`);
  let socialList = document.querySelector(`.social-block__list`);
  socialBlock.addEventListener(`mouseover`, function () {
    socialBlock.classList.add(`social-block--active`);
  });
  socialBlock.addEventListener(`mouseleave`, function () {
    socialBlock.classList.remove(`social-block--active`);
  });
  socialBtn.addEventListener(`click`, function () {
    socialList.classList.toggle(`active`);
  });
};
