module.exports = {
  date: '14/03/2020',
  type: 'Tips & Tricks',
  title: 'Use This Fast Refresh Trick To Quickly Debug Your React Native App',
  hidden: true,
  subtitle: 'Inspect your UI and data with this quick trick.',
  body: [
    {
      type: 'h2',
      innerText: '1. Use Fast Refresh for Fixing Your UI',
    },
    {
      type: 'p',
      innerText: `One of the areas where React Native really lacks when compared to the web is in the UI inspection department. None of the tools available now come even close to the ease of use and helpfulness of the Inspect Element tool in browsers.`,
    },
    {
      type: 'p',
      innerText: `But React Native has a trick up its sleeve: <b>Fast Refresh</b>.`,
    },
    {
      type: 'p',
      innerText: `React Native’s <b>Fast Refresh</b> feature is one of the hottest implementations out there when it comes to previewing code changes. If done right, it can work just as if you had an Inspect Element window open. Try this:`,
    },
    {
      type: 'p',
      innerText: `Make a <code>bred</code> snippet that creates a red <code>border</code>, use it inside any element, hit <code>CMD+S</code> and see your
        element pop on screen. You can then adjust or enhance your element’s styling to your liking.`,
    },
    {
      type: 'img',
      url: 'img/live-reload-ui.gif',
      alt: 'Live Reload demo gif',
    },
    {
      type: 'p',
      innerText: `<br/>It might seem simple and limited, but it turns out to be just what you need 95% of the time.`,
    },
    {
      type: 'p',
      innerText: `This method will also mean you don’t have to open inspect pop-ups and menus and disrupt your coding workflow, so in a way, it's.. even better than web's way? Up to you to decide.`,
    },
    {
      type: 'h2',
      innerText: `2. Use Fast Refresh for Inspecting Data`,
    },
    {
      type: 'p',
      innerText: `An even more useful trick when using <b>Fast Refresh</b> is the ability to check the value of any variable from the current frame. Consider this example:`,
    },
    {
      type: 'img',
      url: `stats.jpg`,
      alt: `iOS Simulator top part`,
    },
    {
      type: 'p',
      innerText: ` This “Player Stats” screen is supposed to show <code>stats</code> of a player. But it looks like something is broken, and we need to find out what it
        is.`,
    },
    {
      type: 'p',
      innerText: `The code looks like this:`,
    },
    {
      type: 'pre',
      innerText: `
  &lt;View>
    {stats.map(stat => 
      &ltStat {...stat} />
    )}
  &lt;/View>
  
  ...

  export const Stat = ({ value = '', name }) => ...`,
    },
    {
      type: 'p',
      innerText: `In the screenshot, the stat's value seems to aways be “-”. This indicates that the stat variable’s structure has changed. We need to inspect it.`,
    },
    {
      type: 'p',
      innerText: `But instead of firing up the remote debugger and going through all the hassle associated with it, we can do this much, much easier with <b>Fast Refresh</b>.`,
    },
    {
      type: 'p',
      innerText: `Just add this in your markup:`,
    },
    {
      type: 'pre',
      innerText: `
  &lt;View>
  {stats.map(stat => 
    &lt;Stat <b>dog={console.log(stat)}</b> {...stat} />  
  )}
  &lt;/View>`,
    },
    {
      type: 'p',
      innerText: `Due to the nature of the <code>render</code> function, each and every time it is called, every attribute of every element is evaluated to be then sent
        down as props.`,
    },
    {
      type: 'p',
      innerText: `Assigning <code>console.log(stat)</code> to a completely arbitrary and non-existent attribute (in this case “dog” — a random string that I’ve found
          handy) and then saving to trigger Fast Refresh, our render function will trigger an evaluation of our <code>dog</code> attribute.`,
    },
    {
      type: 'img',
      url: `console.jpg`,
      alt: `Console with code`,
    },
    {
      type: 'p',
      innerText: `And now we can easily see that we actually need to spread <code>stat.content</code> and not <code>stat</code>, as our data got nested under
        <code>content</code>.`,
    },
    {
      type: 'p',
      innerText: `Enjoy!`,
    },
  ],
};
