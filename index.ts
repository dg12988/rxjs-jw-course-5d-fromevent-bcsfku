import { fromEvent } from "rxjs";

const triggerButton = document.querySelector('button#trigger');

fromEvent(triggerButton, 'click').subscribe(
  event => console.log(event);
);