import { effect, signal } from '@preact/signals';

export const isConnected = signal(false);
export const lastMessage = signal("No hay mensajes");

export const currentTime = signal(new Date());

// effect(() => {
//   const interval = setInterval(() => {
//     currentTime.value = new Date();
//   }, 1000);

//   return () => clearInterval(interval);
// });
