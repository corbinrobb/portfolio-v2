import { writable } from "svelte/store";

export const darkModeStore = writable(false);

export const menuExpandedStore = writable(false);

export const pageStore = writable("home");
