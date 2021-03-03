export default function serviceWorkerDev() {
  let serviceWorkerUrl = `${process.env.PUBLIC_URL}/serviceWorker.js`;

  navigator.serviceWorker.register(serviceWorkerUrl).then((response) => {
    console.log("response   :   ", response);
  });
}
