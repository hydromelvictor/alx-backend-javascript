import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  result = []
  try{
    const signup = await signUpUser(firstName, lastName);
    const upload = await uploadPhoto(fileName);
    result.push({ status: 'fulfilled', value: signup});
  } catch(err) {
    result.push({ status: 'rejected', value: err});
  }
  return result;
}
