import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  result = [];
  const signup = await signUpUser(firstName, lastName);
  result.push({ status: 'fulfilled', value: signup});
  const upload = await uploadPhoto(fileName).catch(() => ({ status: 'reject', value: err}));
  result.push({ status: 'rejected', value: err});
  return result;
}
