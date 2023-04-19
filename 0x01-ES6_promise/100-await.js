import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser () {
  try {
    const img = await uploadPhoto();
    const user = await createUser();
    return { photo: img, user: user, };
  } catch {
    return { photo: null, user: null, };
  }
}
