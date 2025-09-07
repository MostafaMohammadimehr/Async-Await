const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingdetails = {
      name: "Codeyad Meeting",
      location: "Tehran",
      time: "1:00 PM",
    };
    resolve(meetingdetails);
  } else {
    reject(new Error("Meeting Canceled..."));
  }
});
const addToCalendar = (meetingDetails) => {
  const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on
     ${meetingDetails.location}`;
  return Promise.resolve(calendar);
};
// meeting
//   .then(addToCalendar)
//   .then((res) => console.log(res))
//   .catch((rej) => console.log(rej));
const mymeting = async () => {
  const meetingDetails = await meeting;
  const message = await addToCalendar(meetingDetails);
  console.log(message);
};
mymeting();
