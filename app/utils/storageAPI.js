import { config } from './config';

export function saveToStorage(id) {
    const dataInStorage = getStorageData();
    const storageArray = dataInStorage ? dataInStorage : [];
    const idIndex = storageArray.indexOf(id);
    if (idIndex > -1) {
        storageArray.splice(idIndex, 1);
    } else {
        storageArray.push(id)
    }
    localStorage.setItem(config.storageKey, JSON.stringify(storageArray));
}

export function getStorageData() {
    return JSON.parse(localStorage.getItem(config.storageKey));
}
