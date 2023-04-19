import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser(uploadPhoto, createUser) {
  try {
    const img = await uploadPhoto();
    const user = await createUser();
  } catch (err) {
    return { photo: null, user: null };
  }
  return { photo: img, user: user };
}
