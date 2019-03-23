import "@babel/polyfill";
import "styles/main.scss";
import "assets/images/arpit-goyal.png";
import "assets/images/share.jpg";

import "assets/images/home/code.png";
import "assets/images/home/write.png";
import "assets/images/home/everything.png";

import "assets/images/work/boxmyspace.png";
import "assets/images/work/explara.png";
import "assets/images/work/gojavas.png";
import "assets/images/work/parallellabs.png";
import "assets/images/work/thankyouindia.png";
import "assets/images/work/townscript.png";
import "assets/images/work/ufaber.png";
import "assets/images/work/webengage.png";

import "assets/images/404/pirate.png";

import Bulma from '@vizuaalog/bulmajs';
// import Modal from '@vizuaalog/bulmajs/dist/modal';

window.blogModal = Bulma.create('modal', {
    element: document.querySelector('#blog-modal')
});

// blogModal.open();
