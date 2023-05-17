// Case - Singer
// song release

//Promise for the song status
//@params - delay (setTimeout) = Buffer time for sending
//@params = status (boolean) = Status of the song; true = song is released; false = the has delays

//Resolve - Success Promise (if the song is released)
//Reject - Failed Promise (if the song has delays on its release)
function songStatus(delay, status) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve("The song Viva La Vida is released!");
      } else {
        reject(new Error("The song has delays on its release"));
      }
    }, delay * 1000);
  });
}

//.then, .catch, .finally

//Then - Method will run (success) RESOLVE
//Catch - Method will run (failed) REJECT
//Finally - Method will run either
songStatus(1, true)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("Sending to the subscribed parties...");
  });
