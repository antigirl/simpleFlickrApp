import { config } from './config';

export function saveToStorage(id) {
    const dataInStorage = getStorageData();
    const storageArray = dataInStorage ? dataInStorage : [];
    storageArray.push(id)
    localStorage.setItem(config.storageKey, JSON.stringify(storageArray));
}

export function getStorageData() {
    return JSON.parse(localStorage.getItem(config.storageKey));
}
