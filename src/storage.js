import storage from 'localforage';

const NAMESPACE = 'BEST_PRODUCT';

export function set(key, value) {
  return storage.setItem(`${NAMESPACE}-${key}`, value);
}

export function get(key) {
  return storage.getItem(`${NAMESPACE}-${key}`);
}

export function remove(key) {
  return storage.removeItem(`${NAMESPACE}-${key}`);
}

export function removeAll(){
  return storage.clear();
}
