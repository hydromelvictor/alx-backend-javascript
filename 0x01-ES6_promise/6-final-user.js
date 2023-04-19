import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signup = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName)
  return Promise.allSettled([await signup, await upload]).then((result) =>
    ({ status: result.status, value: result.values })
  ).catch((err) =>
  ({ status: err.status, value: err.value })
  );
}
