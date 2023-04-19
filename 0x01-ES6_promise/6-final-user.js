import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signup = await signUpUser(firstName, lastName);
  const upload = await uploadPhoto(fileName);
  return Promise.allSettled([ signup, upload ]).then((result) =>
    ([{ status: result.status, value: result.value}])
  );
}
