import { config } from './config';

export function saveToStorage(id) {
    const dataInStorage = getStorageData();
    const storageArray = dataInStorage ? JSON.parse(dataInStorage) : [];
    const dataToStore = storageArray.push(id)
    localStorage.setItem(config.storageKey, JSON.stringify(dataToStore));
}

export function getStorageData() {
    return localStorage.getItem(config.storageKey);
}
