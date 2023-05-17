// Case - Facebook notification
// - Messages -> Notify Device
// - If not seen -> Notify other device

//Function for message notification
function message({ name, message }) {
  console.log(`${name} messages you: "${message}"`);
}

//Function for tagging notification
function tagging({ name, time }) {
  console.log(`${name} tags you on ${time}`);
}

//Function that adds delay
function buffer(seconds, cb, request, status) {
  return new Promise((resolve, reject) => {
    const ms = seconds * 1000;
    if (status) {
      setTimeout(function () {
        cb(request);

        resolve(request.name);
      }, ms);
    } else reject(new Error("Action is unsuccessful"));
  });
}

async function mainAction() {
  const response = await buffer(
    2,
    tagging,
    { name: "Alvin Chipmunk", time: "5PM" },
    true
  );

  console.log(
    `${response} is the last person on your notification, you can open it ⬆️`
  );
}

mainAction();
