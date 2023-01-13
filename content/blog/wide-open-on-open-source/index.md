---
title: Wide open on Open Source
date: "2022-11-15T22:40:32.169Z"
featuredimage:
  src: "./blog1.png"
  alt: "Wide open on Open Source"
author:
  name: "Misha Petrov"
  email: "misha@fictiontribe.com"
  role: "Director of Technology"
  image:
    src: "./avatar-misha.jpg"
    alt: "Misha Petrov"
ogimage: 
  src: "./og.jpg"
  alt: "og"
description: "The open-source community is one of the most important aspects of the modern world of programming and development. The ability to share code and ideas freely has led to some of the most amazing advances in technology in recent years. One of the best things about open source is that anyone can contribute."
---

The open-source community is one of the most important aspects of the modern world of programming and development. The ability to share code and ideas freely has led to some of the most amazing advances in technology in recent years. One of the best things about open source is that anyone can contribute. If you have an idea for a new feature or a bug fix, you can submit a pull request and it will be reviewed by the community. Even if your code isn't accepted, you can still learn from the feedback you receive.

Like most developers, the Fiction Tribe team uses Open Source tools to power up our development. Using open source without making community contributions goes against our values. For this reason, we have a series of OpenSource projects to share some techniques and approaches we’ve developed working with clients around the world. One key goal (among many) is to share and contribute our knowledge and skills with the Open-Source community.


## Here are the two recent additions to our OS library:

[<img style="max-width: 100%; margin: 20px auto;" src="https://fictiontribe.com/os/webpack-boilerplate/og-boilerplate.jpeg">](https://fictiontribe.com/os/webpack-boilerplate/)

### 1) FT Landing Page Boilerplate
<div class="buttons-flex">
<a href="https://github.com/fictiontribe/ft-webpack-boilerplate" target="_blank" class="glow-on-hover-img"><img class="glow-on-hover-img" style="" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"></a>
<a href="https://fictiontribe.com/os/webpack-boilerplate" target="_blank" class="glow-on-hover-img"><img class="glow-on-hover-img" style="width: 95px;" src="https://fictiontribe.com/os/ft-badge.svg"></a>
</div>

Simply, your last boilerplate. 
If your work involves developing Landing Pages or simple interactive experiences for the web, you know how hard it is to find a well-rounded boilerplate to quickly KO development; the boilerplate based on the latest version of Webpack; the one that works well out of the box and isn't cluttered with unnecessary packages. 
We've used our experience to put together this complete starter package, featuring some cool, reusable visual sugar that screams "inspired by Fiction Tribe." 


[<img style="max-width: 100%; margin: 20px auto;" src="https://fictiontribe.com/os/assetcart/og-assetcart.jpeg">](https://fictiontribe.com/os/assetcart/)

### 2) FT AssetCart.js 
<div class="buttons-flex">
<a href="https://github.com/fictiontribe/AssetCart" target="_blank" class="glow-on-hover-img"><img class="glow-on-hover-img" style="" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"></a>
<a href="https://fictiontribe.com/os/assetcart/" target="_blank" class="glow-on-hover-img"><img class="glow-on-hover-img" style="width: 95px;" src="https://fictiontribe.com/os/ft-badge.svg"></a>
</div>

For landing pages that offer multiple content assets as downloadables, we developed this Widget. It collects all linked assets with a class and adds an animation effect. 
As a user scrolls through the page content, our Widget drops linked content into an asset cart for the user to view and download their collection of deeper content, while keeping the focus on the page. 
This imitates e-commerce cart functionality to improve on-page engagement and form-fill conversion metrics with bundle downloads.

One of the most important values of open source is collaboration. By working together, developers can create something much greater than the sum of its parts. Open source is also a great way to learn new skills–one of the best things you can do is find an open-source project that you're interested in and start contributing. 


## Check out the link below to learn more about our contributions:
<a target="_blank" href="https://fictiontribe.com/os/" class="glow-on-hover" type="button">Fiction Tribe OpenSource Library</a>
<style>
  .buttons-flex {
    display: block;
    position: relative;
    margin-bottom: -10px;
    height: 70px;
  }
  a.glow-on-hover {
    margin-top: 0;
    width: 340px;
    height: 50px;
    padding: auto 10px;
    text-align: center;
    font-family: "Gilroy", Sans-Serif;
    border: none;
    line-height: 50px;
    outline: none;
    color: #fff;
    background: #131112;
    cursor: pointer;
    position: relative;
    z-index: 0;
}
a.glow-on-hover-img {
    top: -10px;
    margin-right: 5px;
    width: 95px;
    height: 28px;
    padding: auto 10px;
    text-align: center;
    font-family: "Gilroy", Sans-Serif;
    border: none;
    line-height: 50px;
    outline: none;
    color: #fff;
    background: #131112;
    cursor: pointer;
    position: relative;
    z-index: 0;
}
.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
}
.glow-on-hover:active {
    color: #000
}
.glow-on-hover:active:after {
    background: transparent;
}
.glow-on-hover:hover:before {
    opacity: 1;
}
.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #131112;
    left: 0;
    top: 0;
}
.glow-on-hover-img:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
}
.glow-on-hover-img:active {
    color: #000
}
.glow-on-hover-img:active:after {
    background: transparent;
}
.glow-on-hover-img:hover:before {
    opacity: 1;
}
.glow-on-hover-img:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #131112;
    left: 0;
    top: 0;
}
@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
</style>

<div class="ft-cta-form">
  <p class="form-cta">Learn how Fiction Tribe can help you achieve your goals</p>
  <!-- modify this form HTML and place wherever you want your form -->
  <form id="form-cta"
    action="https://formspree.io/f/moqregjy"
    method="POST"
  >
    <div class="form-flex">
      <div class="form-item">
        <label>
          Name:
        </label>
        <input type="text" name="lastname">
      </div>
      <div class="form-item">
        <label>
          Email:
        </label>
        <input type="email" name="email">
      </div>
      <button type="submit">Submit</button>
    </div>
    <p id="my-form-status"></p>
    <!-- your other form fields go here -->
  </form>
</div>