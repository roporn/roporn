module.exports = {
  date: '15/04/2020',
  type: 'Tutorial',
  title: '7 Easy Steps To Localize Your React Native App',
  ogUrl: 'https://ow.ly/',
  hidden: true,
  subtitle: 'It\'s not a matter of "if", but "when". Let\'s see how.',
  body: [
    {
      type: 'h2',
      innerText: `Which library should you choose?`,
    },
    {
      type: 'p',
      innerText: `It *is* true that any translation library that works for React will also do the trick for React Native. There's <a href="https://phrase.com/blog/posts/react-i18n-best-libraries/">about 5 or 6 main options that you could choose from</a>.`,
    },
    {
      type: 'p',
      innerText: `But after counting up the pros and cons of each one, we decided to go with <a href="https://www.i18next.com/">i18next</a>. It's a library that offers a quick "getting started" routine, as well as quite a few  plug-n-play features which you can opt in for later.`,
    },
    {
      type: 'p',
      innerText: `Let's get started!`,
    },
    {
      type: 'h2',
      innerText: `1. Install i18next`,
    },
    {
      type: 'p',
      innerText: `<code>npm install i18next --save</code>`,
    },
    {
      type: 'h2',
      innerText: `2. Create empty translation file for English`,
    },
    {
      type: 'p',
      innerText: `Create a file and put it in a folder that works best for you (e.g. <code>/translations/en.tsx</code>), and where you will later add translation files for all your supported languages. It should contain something like:`,
    },
    {
      type: 'pre',
      innerText: `
  const translation = {};
  export default translation;`,
    },
    {
      type: 'h2',
      innerText: `3. Initialize the library and supply it with the file you just created`,
    },
    {
      type: 'p',
      innerText: `Put this in your root component:`,
    },
    {
      type: 'pre',
      innerText: `
        
  import i18n from 'i18next';
  import { initReactI18next } from 'react-i18next';
  
  import en from './translation/en';

  i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
      },
    },
  });
        `,
    },
    {
      type: 'p',
      innerText: `The initialization is pretty straightforward, but can take a ton of configuration options based on your needs. <a href="https://www.i18next.com/overview/configuration-options">See all of them here.</a>`,
    },
    {
      type: 'p',
      innerText: `Right now, we could just go and try it out: `,
    },
    {
      type: 'pre',
      innerText: `
    import <b>i18next</b> from 'i18next';
    render() {
      return (
        &lt;Text><b>i18next.t</b>('Hello world!')&lt;/Text>,
      )
    }`,
    },
    {
      type: 'h2',
      innerText: `4. Make the <code>t</code> function available globally`,
    },
    {
      type: 'p',
      innerText: `This is not a mandatory step, but will save a lot of time during development.`,
    },
    {
      type: 'p',
      innerText: `Add this in your root component:`,
    },
    {
      type: 'pre',
      innerText: `
  import i18next from 'i18next';
  <b>global.T</b> = i18next.t;`,
    },
    {
      type: 'p',
      innerText: `Now, instead of <code>import</code>ing <code>18next</code> every time, you can just call <code><b>T</b></code>:`,
    },
    {
      type: 'pre',
      innerText: `
    render() {
      return (
        &lt;Text><b>T</b>('Hello world!')&lt;/Text>
      )
    }`,
    },
    {
      type: 'p',
      innerText: `Shorter, cleaner, and quicker to write.`,
    },
    {
      type: 'p',
      innerText: `Feel free to use <code>t</code> instead of <code>T</code>. We prefer it for visibility purposes.`,
    },
    {
      type: 'h2',
      innerText: `5. Add strong typing to your <code>T</code> calls`,
    },
    {
      type: 'p',
      innerText: `Again, not mandatory, but with some TS magic and very little code, we can achieve static checking for our keys when calling <code>T</code>. Modify your previous code as follows:`,
    },
    {
      type: 'pre',
      innerText: `
  import i18next from 'i18next';
<b>
  import translation from './translation/en';

  type TKeys = keyof typeof translation;

  function translate<K extends TKeys>(key: K, options?: Object) {
    return i18next.t(key, options);
  }
</b>
  
  global.T = translate;
  `,
    },
    {
      type: 'p',
      innerText: `Now, whenever we try to translate using a non-existing key, we get a static compiler warning: `,
    },
    {
      type: 'img',
      url: `compilererror.jpg`,
      alt: `Compiler error`,
    },
    {
      type: 'h2',
      innerText: `6. NOT adding every single key by hand to our dictionary`,
    },
    {
      type: 'p',
      innerText: `So after we've wrapped code like <code>T('Some key')</code>, we need to somehow get our key into the translation file. `,
    },
    {
      type: 'p',
      innerText: `You could do that manually, but depending on the size of your project it might be really time-consuming, and will definitely not feel like a coder's job.`,
    },
    {
      type: 'p',
      innerText: `Here's where one of <b>i18next</b>'s many features come into play. The tool that we will be using to do this for us is called <b>locize</b> (part of i18next). Read more about it and/or register for it <a href="https://locize.com/how-it-works.html">here</a>.`,
    },
    {
      type: 'p',
      innerText: `What it's gonna do for us: whenever we call <code>i18next.t</code> with a certain key, the library will automatically add it to a json that we can easily export and put into our project. Sweet!`,
    },
    {
      type: 'p',
      innerText: `Add the following to your init:`,
    },
    {
      type: 'pre',
      innerText: `
  import i18n from 'i18next';
  //install this before importing
  <b>import Backend from 'i18next-locize-backend';</b> 
  import { initReactI18next } from 'react-i18next';
  
  import en from './translation/en';

<b>
  const locizeOptions = {
    projectId: 'take it from locize',
    apiKey: 'same',
    referenceLng: 'en',
  };
</b>

  i18n
  .use(initReactI18next)<b>
  .use(Backend)</b>
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    <b>saveMissing: true,</b>
    resources: {
      en: {
        translation: en,
      },
    },
  });
        `,
    },
    {
      type: 'p',
      innerText: `Now if you navigate to a screen that uses the <code>T</code> function, your key will automatically be added to locize:`,
    },
    {
      type: 'img',
      url: `locize.jpg`,
      alt: `Locize service interface`,
    },
    {
      type: 'p',
      innerText: `And whenever you feel like it, export it to a JSON using the "...More" context menu in the top right. The JSON will look like this:`,
    },
    {
      type: 'pre',
      innerText: `
  {
    'Be the first to start a discussion!': 'Be the first to start a discussion!',
    'Drum roll for the': 'Drum roll for the',
    'Other key': 'Other key'
  }`,
    },
    {
      type: 'h2',
      innerText: `7. Changing the language`,
    },
    {
      type: 'p',
      innerText: `Wrap the component from which you want to change the language with the <code>withTranslation</code> HOC:`,
    },
    {
      type: 'pre',
      innerText: `
  export default withTranslation()(RootComponent)`,
    },
    {
      type: 'p',
      innerText: `And then it's as simple as calling`,
    },
    {
      type: 'pre',
      innerText: `
  this.props.i18n.changeLanguage(languageCode);`,
    },
    {
      type: 'p',
      innerText: `<code>languageCode</code> being one of the provided keys inside of<br/> <code>resources</code> in the i18next initialization object.`,
    },
    {
      type: 'h2',
      innerText: `8. And we're done!`,
    },
    {
      type: 'p',
      innerText: `There are still nice things you could do, such as putting your <code>T</code> inside of a custom <code>Text</code> component that you would use instead of the default one, to get you writing even less <code>T</code>s, but other than that, these steps will get you to a point in which you can get to a fully translation-ready app in as little as a day. And then it's just a matter of sending the files to the translators!`,
    },
  ],
};
