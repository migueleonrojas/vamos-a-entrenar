const d = document;

const $loader = d.querySelector(".loader");
const $loader_left = d.querySelector(".loader_left");
const $loader_right = d.querySelector(".loader_right");

const hideLoader = () => {
   $loader_left.classList.add("loader_left_hide");
   $loader_right.classList.add("loader_right_hide");
   $loader.classList.add("loader_hide");
};

const showLoader = () => {
   $loader_left.classList.remove("loader_left_hide");
   $loader_right.classList.remove("loader_right_hide");
   $loader.classList.remove("loader_hide");

};

export {
   hideLoader,
   showLoader
}