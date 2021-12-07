import { readable, writable } from "svelte/store";
let dark: boolean;
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  dark = true;
}

export const darkModeStore = writable(dark);

export const menuExpandedStore = writable(false);

export const pageStore = writable("home");

export const projectStore = readable([
  {
    title: "Wethinky",
    description: "Its a blog!",
    images: ["computer", "food"],
  },
  {
    title: "Apollo",
    description: "Its a web application for autonomous stand ups!",
    images: ["food", "computer"],
  },
  {
    title: "Secret Family Recipes",
    description: "Its a website for recipes!",
    images: ["food", "computer"],
  },
  {
    title: "My Portfolio",
    description: "You're looking at it!",
    images: ["computer", "food"],
  },
]);
