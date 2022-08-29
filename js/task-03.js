"use strict";
const mainBlock = document.querySelector(".gallery");
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const constructHtml = (data, targetBlock) => {
  const newImages = data.reduce(
    (acc, element) => 
      acc + `<li><img src = "${element.url}" alt = "${element.alt}"></li>`, ''
  ); 
  targetBlock.insertAdjacentHTML('afterBegin', newImages);
};

constructHtml(images, mainBlock);

// 3 завдання: - треба додати всі елементи за один виклик insertAdjancentHTML()
