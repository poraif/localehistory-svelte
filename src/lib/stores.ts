import { writable } from "svelte/store";
import type { Street, Session, Placemark } from "$lib/types/placemark-types";

export const currentSession = writable<Session>();
export const subTitle = writable<string>();
export const latestStreet = writable<Street>();
export const latestPlacemark = writable<Placemark>();