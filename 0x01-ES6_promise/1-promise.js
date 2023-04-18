export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) resolve({status: 200, body: 'Success'});
    else console.log("The fake API is not working currently");
  });
}
