module.exports = {
  date: '06/03/2020',
  type: 'Answer',
  title: 'Is there a LocalStorage in React Native?',
  subtitle: '',
  body: [
    {
      type: 'h2',
      innerText: `No.`,
    },
    {
      type: 'p',
      innerText: `React Native uses <code>AsyncStorage</code> as its main data persistence solution. It makes use of its <code>setItem</code> and <code>getItem</code> methods to store/retrieve data.`,
    },
    {
      type: 'p',
      innerText: `All methods of AsyncStorage (<a href="https://reactnative.dev/docs/asyncstorage">see complete list</a>) are asynchronous, and need to be <code>await</code>ed to retrieve their values.`,
    },
    {
      type: 'p',
      innerText: `Example usage:`,
    },
    {
      type: 'pre',
      innerText: `
  import { AsyncStorage } from 'react-native';

  async componentDidMount() {
    const user = await AsyncStorage.getItem('user');
    this.setState({ currentUser: JSON.parse(user) });
  }

  storeUser = async (user) => {
    const userString = JSON.stringify(user);
    await AsyncStorage.setItem('user', userString);
    console.log('User succesfully saved.');
  }`,
    },
    {
      type: 'p',
      innerText: `Keep in mind that <code>setItem</code> will only allow values of type <code>string</code>, so make sure to <code>JSON.stringify</code> any objects that you want to store to <code>AsyncStorage</code>, and to <code>JSON.parse</code> any objects retrieved by <code>getItem</code>.`,
    },
  ],
};
