export default function updateUniqueItems(mapp) {
  for (const val of mapp.values()) {
    if (val === 1) {
      try{
        val = 100;
      } catch {
        return Error('Cannot process');
      }
    }
  }
  return mapp;
}
