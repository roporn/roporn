module.exports = {
  date: '08/03/2020',
  type: 'Answer',
  title: 'How To Hide The Keyboard in React Native?',
  hidden: true,
  subtitle: '',
  body: [
    {
      type: 'h2',
      innerText: `1. Hiding the keyboard in response to a user tap`,
    },
    {
      type: 'p',
      innerText: `This method will allow the user to hide the keyboard when tapping anywhere outside of the <code>TextInput</code>'s area.`,
    },
    {
      type: 'p',
      innerText: `Wrap the content of your page with a <code>ScrollView</code>(if it is not already), and add the <code>keyboardDismissMode</code> property:`,
    },
    {
      type: 'pre',
      innerText: `
  <ScrollView <b>keyboardDismissMode="on-drag"</b>>
    <TextInput />
  </ScrollView>`,
    },
    {
      type: 'h2',
      innerText: `2. Hiding the keyboard programatically `,
    },
    {
      type: 'p',
      innerText: `This allows the developer to hide the keyboard programatically from JS, whenever needed.`,
    },
    {
      type: 'pre',
      innerText: `
  import { Keyboard } from 'react-native';

  //anywhere
  <b>Keyboard.dismiss();</b>`,
    },
  ],
};
