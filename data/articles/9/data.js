module.exports = {
  date: '08/04/2020',
  type: 'Answer',
  title: 'What is the difference between Expo and React Native?',
  isFeatured: true,
  subtitle: '',
  body: [
    {
      type: 'p',
      innerText: `Expo is a set of tools, libraries, and helpful features built on top of React Native.`,
    },
    {
      type: 'h2',
      innerText: `React Native without Expo`,
    },
    {
      type: 'p',
      innerText: `Pure React Native offers complete flexibility and configurability, and is a great solution for when developing hybrid apps which require developers to write native (Java/Swift) code as well.`,
    },
    {
      type: 'p',
      innerText: `When developing in Pure React Native, the developer builds the apps themselves on their local machines, and can choose from a wide variety of options when it comes to distributing Beta Previews and running on device.`,
    },
    {
      type: 'h2',
      innerText: `React Native with Expo`,
    },
    {
      type: 'p',
      innerText: `Expo is a set of tools, libraries, and other helpful features built on top of React Native, designed to reach the goal of never <b>having to</b> write native iOS/Android code when developing in React Native.`,
    },
    {
      type: 'p',
      innerText: `It allows developers who only know Javascript to be able to build a React Native app from start to finish.`,
    },
    {
      type: 'p',
      innerText: `It also eases some key flows during the development/maintenance of your app. Some examples include:`,
    },
    {
      type: 'p',
      innerText: `<b>QR code scan: </b> when developing, Expo will give you a QR code which you can scan with
       the Expo app (available in Play/App store). Scanning it will open your app on the device, 
       allowing you to easily switch to on-device development.`,
    },
    {
      type: 'p',
      innerText: `<b>OTA updates: </b> after publishing your app in the App Store / Play Store, you can easily update it by using <b>Over-The-Air</b> updates. With a simple command, Expo packages all your Javascript in to a bundle and pushes it into all installed instances of your app.`,
    },
    {
      type: 'p',
      innerText: `<b>Beta Previews: </b> Beta Previews are easier than ever with the Expo app. Just publish 
       your app to the 'default' channel, and it becomes available for anyone to access, using the Expo app. (this
         has become more limited in the recent years, and now requires a username/pass to access)`,
    },
    {
      type: 'p',
      innerText: `<b>Lots of ready-to-use, high quality libraries:</b>  Push Notifications, Payments, Camera, Library, Calendar, Fonts, Icons, Google Maps, Sensors and many other, all ready to go, just by importing them from the Expo package. (now moved to separate packages that can be added with <code>expo install</code>)`,
    },
  ],
};
