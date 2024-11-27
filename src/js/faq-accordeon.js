import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
window.addEventListener('DOMContentLoaded', () => {
  new Accordion('.js-accordion', {
    elementClass: 'js-accordion-item',
    triggerClass: 'js-accordion-subtitle',
    panelClass: 'js-accordion-body',
    activeClass: 'active',
    openOnInit: [0],
  });
});
