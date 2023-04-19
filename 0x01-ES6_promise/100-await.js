import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  try {
    const img = await uploadPhoto();
    const profile = await createUser();
    return { photo: img, user: profile };
  } catch {
    return { photo: null, user: null };
  }
}
