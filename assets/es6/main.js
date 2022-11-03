import pages from "./blocks/pages";
import animation from "./blocks/animation";
import other from "./blocks/other";
import forms from "./blocks/forms";
import mask from "./blocks/mask";

'use strict';

window.addEventListener('DOMContentLoaded', () => {
    pages();
    animation();
    forms();
    mask('input[type="tel"]');
    other();
});