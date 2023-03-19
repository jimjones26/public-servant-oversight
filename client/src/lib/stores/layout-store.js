// @ts-nocheck
import { writable } from "svelte/store";

const layoutStore = writable({
  showMobileMenu: false,
})

const customLayoutStore = {
  subscribe: layoutStore.subscribe,

  toggleMobileMenu: () => {
    layoutStore.update(currentState => {
      return { ...currentState, showMobileMenu: !currentState.showMobileMenu }
    })
  }
}

export default customLayoutStore;