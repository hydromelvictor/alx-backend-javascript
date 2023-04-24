export default function updateUniqueItems(mapp) {
  if (!(mapp instanceof Map)) throw new Error('Cannot process');
  for (const [key, val] of mapp.entries) {
    if (val === 1) {
      mapp.set(key, 100);
    }
  }
  return mapp;
}
