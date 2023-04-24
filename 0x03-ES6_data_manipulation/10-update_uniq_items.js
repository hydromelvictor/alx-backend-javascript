export default function updateUniqueItems(mapp) {
  if (!(mapp instanceof Map)) throw new Error('Cannot process');
  for (const val of mapp.values()) {
    if (val === 1) {
      val = 100;
    }
  }
  return mapp;
}
