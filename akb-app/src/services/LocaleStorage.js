export function getItem(item) {
    return window.localStorage.getItem(item);
}

export function setItem(localeStorageName, newItem) {
    window.localStorage.setItem(localeStorageName, newItem);
}

export function addItem(localeStorageName, newItem) {
    window.localStorage.setItem(localeStorageName, newItem);
}
