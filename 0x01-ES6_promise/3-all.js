import {uploadPhoto, createUser} from './utils.js';

export default function handleProfileSignup() {
  const upload = uploadPhoto();
  const user = createUser();
  return Promise.all([upload, user]).then((result) =>  
    console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`)
  ).catch(() => console.log(" Signup system offline"));
}
