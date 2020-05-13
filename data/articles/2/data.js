module.exports = {
  date: '06/03/2020',
  type: 'Tips & Tricks',
  title: 'How to Navigate To Parent Route From Nested Navigator in React Navigation',
  subtitle: 'When everything else fails, use this trick.',
  body: [
    {
      type: 'h2',
      innerText: `The setup`,
    },
    {
      type: 'p',
      innerText: `So you have a structure similar to this:`,
    },
    {
      type: 'pre',
      innerText: `
  StackNavigator
    <b>Home</b>
    Login
    Authenticated -> CustomTabNavigator
        ScreenOne -> StackNavigator
            ScreenOneDetails
            ScreenOneSettings
        <b>ScreenTwo</b>`,
    },
    {
      type: 'p',
      innerText: `And you found yourself navigated to <code>Screen Two</code>.`,
    },
    {
      type: 'h2',
      innerText: `The problem`,
    },
    {
      type: 'p',
      innerText: `How do you navigate from <code>Screen Two</code> to <code>Home?</code>`,
    },
    {
      type: 'h2',
      innerText: `The solution(s)`,
    },
    {
      type: 'p',
      innerText: `Store your StackNavigator's reference globally, and use it freely wherever you need.`,
    },
    {
      type: 'p',
      innerText: `App.js (or wherever you render your <code>StackNavigator</code>)`,
    },
    {
      type: 'pre',
      innerText: `
  render() {
    return (
      &lt;StackNavigator 
        <b>ref={(x) => (global.stackNavigator = x)} </b>
      /&gt;)
    }`,
    },
    {
      type: 'p',
      innerText: `Any component:`,
    },
    {
      type: 'pre',
      innerText: `
  <b>global.stackNavigator</b>.dispatch(
    NavigationActions.navigate({
      routeName: 'Home',
      params: { },
    }),
  );`,
    },
    {
      type: 'h2',
      innerText: `Disclaimer`,
    },
    {
      type: 'p',
      innerText: `This solution is by any means not the recommended way of using navigators. Whenever you can, navigate using the <code>this.props.navigation.navigate()</code> as described in the official docs:`,
    },
    {
      type: 'a',
      url: 'https://reactnavigation.org/docs/navigating/',
      innerText: `https://reactnavigation.org/docs/navigating`,
    },
    {
      type: 'p',
      innerText: `However, there are cases which the official way doesn't support, such as a <b>navigator with dynamic routes constructed at runtime</b>:`,
    },
    {
      type: 'a',
      url: `https://reactnavigation.org/docs/4.x/limitations/`,
      innerText: `https://reactnavigation.org/docs/4.x/limitations/`,
    },
    {
      type: 'p',
      innerText: `Follow the entire Github issue here:`,
    },

    {
      type: 'a',
      url: `https://github.com/react-navigation/react-navigation/issues/335`,
      innerText: `https://github.com/react-navigation/react-navigation/issues/335`,
    },
  ],
};
