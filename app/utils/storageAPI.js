import { config } from './config';

export function saveToStorage(id) {
    const dataInStorage = getStorageData();
    const storageArray = dataInStorage ? dataInStorage : [];
    if (storageArray.includes(id)) {
        storageArray.splice(storageArray.indexOf(id), 1);
    } else {
        storageArray.push(id)
    }
    localStorage.setItem(config.storageKey, JSON.stringify(storageArray));
}

export function getStorageData() {
    return JSON.parse(localStorage.getItem(config.storageKey));
}
