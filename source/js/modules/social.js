export default () => {
  let socialBtn = document.querySelector(`.social-block__toggler`);
  let socialList = document.querySelector(`.social-block__list`);
  socialBtn.addEventListener(`click`, function () {
    socialList.classList.toggle(`active`);
    socialBtn.classList.toggle(`social-block--active`);
  });
};
