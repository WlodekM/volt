/**
 * @file Stores, not to be confused with shops or those other stores.
 */

import { writable } from "svelte/store";

export let isBot = writable(false)
export let token = writable("")