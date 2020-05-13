module.exports = {
  date: '04/03/2020',
  type: 'Answer',
  title: 'What Is The Difference Between React Native and React?',
  subtitle: '',
  body: [
    {
      type: 'h2',
      innerText: `What is ReactJS?`,
    },
    {
      type: 'p',
      innerText: `<b>ReactJS</b> is a JavaScript library that can be run both on front-end web (in the browser) or on a server (<a href="https://medium.com/@baphemot/whats-server-side-rendering-and-do-i-need-it-cb42dc059b38">Server Side Rendering</a>). It allows for building user interfaces and web applications.`,
    },
    {
      type: 'p',
      innerText: `It uses <a href="https://reactjs.org/docs/introducing-jsx.html">JSX</a> as its primary syntax, which is a HTML+JS+CSS combination developed by Facebook.`,
    },
    {
      type: 'p',
      innerText: `<b>It was invented so JavaScript can manipulate the website DOM</b> faster using <a href="https://reactjs.org/docs/faq-internals.html">the virtual DOM</a>, which uses
      a smart diffing algorithm to only update the UI when needed, and doing so in batches, resulting in a more performant UI.`,
    },
    {
      type: 'h2',
      innerText: `What is React Native?`,
    },
    {
      type: 'p',
      innerText: `<a href="https://reactnative.dev/">React Native</a> is a mobile applications development framework
      built on top of ReactJS, that allows you to <b>build performant, native mobile applications</b> by writing code that is very similar to pure React.`,
    },
    {
      type: 'p',
      innerText: `When compiled, it turns the Javascript & JSX code into <b>native iOS/Android app components</b> (also, see <a href="https://microsoft.github.io/react-native-windows/">React Native for Windows
      and Mac</a> and <a href="https://docs.expo.io/versions/v33.0.0/introduction/running-in-the-browser/">Expo Web</a>).
      `,
    },
    {
      type: 'h2',
      innerText: `Are React Native and React interchangeable?`,
    },
    {
      type: 'p',
      innerText: `For short - no.`,
    },
    {
      type: 'p',
      innerText: `Firstly, you <b>cannot use React Native without also using React</b>. Secondly, React Native is not a tool that can be used on the web (even if third party efforts <a href="https://docs.expo.io/versions/v33.0.0/introduction/running-in-the-browser/">do exist</a>) or in SSR.`,
    },
  ],
};
