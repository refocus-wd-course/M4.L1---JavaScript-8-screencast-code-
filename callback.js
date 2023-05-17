// Case - Facebook notification
// - Messages -> Notify Device
// - If not seen -> Notify other device

//Function for Notification
//@param - cb (a callback)
//@param - request (object) = information
//@param - status (boolean) true = seen; false = not seen
function notify(sec, cb, request, status) {
  setTimeout(() => {
    cb(request);
  }, sec * 1000);
  return request.name;
}

//Function for message notification
function message({ name, message }) {
  console.log(`${name} messages you: "${message}"`);
}

//Function for tagging notification
function tagging({ name, time }) {
  console.log(`${name} tags you on ${time}`);
}

//Function that adds delay
function buffer(seconds, cb, request) {
  const ms = seconds * 1000;

  setTimeout(function () {
    console.log(`Sending the notification to other device!`);

    cb(request);
  }, ms);
}

//Function for cleaning Notification
function cleanNotification() {
  console.log("Cleaning Notification");
}
const response = notify(
  2,
  tagging,
  { name: "Alvin Chipmunk", time: "5PM" },
  true
);

console.log(
  `${response} is the last person on your notification, you can open it ⬆️`
);
