import { fromEvent, Observable } from "rxjs";

const triggerButton = document.querySelector('button#trigger');

const subscription = fromEvent<MouseEvent>(triggerButton, 'click').subscribe(
  event => console.log(event.type, event.x, event.y)
);


setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 5000);

// const triggerClick$ = new Observable<MouseEvent>(subscriber => {
//   triggerButton.addEventListener('click', event => {
//     subscriber.next(event)
//   });
// });

// triggerClick$.subscribe(
//   event => console.log(event.type, event.x, event.y)
// );