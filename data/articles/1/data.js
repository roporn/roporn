module.exports = {
  date: '22/03/2020',
  type: 'Tips & Tricks',
  isFeatured: true,
  title: '7 Tips For Maximizing Efficiency When Writing React Native Apps',
  ogUrl: 'https://bit.do/',
  subtitle: "React Native is a complex tool, but building apps with it doesn't have to be cumbersome.",
  body: [
    {
      type: 'h2',
      innerText: '1. Get a Mac',
    },
    {
      type: 'p',
      innerText:
        "This can't be stressed enough. If you’re e.g. a Windows user and think it would be better to use the OS you’re used accustomed to, let’s just say this one’s non-negotiable — macOS is the way to go when it comes to React Native development.",
    },
    {
      type: 'p',
      innerText: 'There are two major reasons for this:',
    },
    {
      type: 'p',
      className: 'indented',
      innerText:
        '1. MacOS is the only way to build for iOS. Apple really knows its business, and their closed ecosystem tactic It’s no coincidence that all the tutorials take it for granted that you use a Mac — if you want to do cross-platform development, you will, sooner or later, <u>need</u> a Mac.',
    },
    {
      type: 'p',
      className: 'indented',
      innerText: `2. General performance and stability. React Native started as an iOS “thing” and it shows. The simulator, the build process, the Fast Refresh
              features, remote JS debugging — they all work beautifully on macOS. On Windows, npm, React Native itself, and even the Windows command line are all
              sorts of buggy.`,
    },

    {
      type: 'p',
      innerText: `The process of developing React Native is at least twice as fast on a Mac, so if you want to start off on the right foot, make sure you are (or will
                be) a macOS user.`,
    },
    {
      type: 'h2',
      innerText: '2. Get a Better Mac',
    },

    {
      type: 'p',
      innerText: `React Native is one of the techs that can eat as many resources as you give it, and for good reason. The workflow usually benefits from
              having as many iOS/Android emulators open at the same time. This will let you achieve a consistent implementation throughout environments as quickly
              as possible.`,
    },
    {
      type: 'p',
      innerText: `Additionally, as every <code>CTRL+ S</code> in your IDE is a rebuild of the bundle, minimizing build time means minimized waiting between writing a
              piece of code and seeing its effects. Those tens or hundreds of times a day really add up.`,
    },
    {
      type: 'p',
      innerText: `Plus, there’s nothing as satisfying as seeing your code results instantly.`,
    },
    {
      type: 'h2',
      innerText: '3. Make the IDE Do the Work for You',
    },
    {
      type: 'p',
      innerText: ` Every IDE comes with some kind of formatting feature, and you might think that’s enough. But today’s IDE’s have gotten smarter, and are about much,
            much more than just that.`,
    },
    {
      type: 'p',
      innerText: ` Indenting code, removing variables, sorting imports, transforming quotes, and everything else that makes your code cleaner and more consistent— it can
            all be done by your IDE and it should be done by your IDE!`,
    },
    {
      type: 'p',
      innerText: `Get to a point where you don’t even remember the last time you pressed the <code>Tab</code> key.`,
    },
    {
      type: 'img',
      url: 'format.gif',
      alt: 'Code formating GIF',
    },
    {
      type: 'p',
      innerText: `Here's a great resource that guides you in setting up your Prettier+ESlint Airbnb rules integrated into vscode:`,
    },
    {
      type: 'a',
      url: 'https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a',
      innerText: `https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a`,
    },
    {
      type: 'h2',
      innerText: '4. Snippet Everything',
    },

    {
      type: 'p',
      innerText: ` Take the DRY principle to the max. Do you see yourself manually writing <code>&lt;View&gt;&lt;/View&gt;</code> or
                          <code>&lt;Text&gt;&lt;/Text&gt;</code> too often? Turn them into a snippet!`,
    },
    {
      type: 'p',
      innerText: `And don’t stop there — maybe you also want to apply a style to the view you just created, so why not make it just that?`,
    },
    {
      type: 'p',
      innerText: `I have created over 25 snippets during React Native development. I made them available <a href="/vscode-rn-snippets.json">here</a> (I’m using VS
              Code). Feel free to use them as a source of inspiration or as they are.`,
    },
    {
      type: 'img',
      url: 'snippet2.gif',
      alt: 'Code snippet GIF',
    },
    {
      type: 'p',
      innerText: `Just make sure you don’t let the IDE get in your way. Learn how to create them easily and efficiently, so you don’t feel like you’re wasting the time
                      you’re saving.`,
    },
    {
      type: 'p',
      innerText: `Writing 3 characters and generating 30 will always make you feel like a pro.`,
    },
    {
      type: 'h2',
      innerText: '5. Twice the Windows, Twice the Speed?',
    },

    {
      type: 'p',
      innerText: `Not quite… But very helpful nonetheless.`,
    },
    {
      type: 'p',
      innerText: `Whenever you find yourself juggling through the same two files over and over, make a habit of splitting that window in two.`,
    },
    {
      type: 'img',
      url: 'twowindows.jpg',
      alt: 'Two code editor windows',
    },
    {
      type: 'p',
      innerText: `It may seem a bit confusing or overwhelming at first, but, especially if you’ve got the real estate, it’s the bread and butter of coding efficiency.`,
    },
    {
      type: 'p',
      innerText: `Getting friendly with your hotkeys goes a long way towards turning this into a habit. Find and bind the IDE command that works best for you.`,
    },
    {
      type: 'p',
      innerText: `For me, the one that does just what I need (in VS Code) is <code>workbench.action.focusSecondEditorGroup</code>. It removes the hassle of opening a
            new tab, moving the file and then focusing the tab, by doing it with a single key combo (in my case <code>CTRL+ 2</code>).`,
    },
    {
      type: 'p',
      innerText: `For example, having both your markup and styling on-screen while creating UI’s is a much more comfortable experience and will save you time as well.`,
    },
    {
      type: 'h2',
      innerText: '6. Use Fast Refresh for Inspecting Your UI',
    },
    {
      type: 'p',
      innerText: `React Native’s Fast Refresh feature is one of the hottest (pun intended) implementations out there when it comes to previewing code changes.`,
    },
    {
      type: 'p',
      innerText: `Fast Refresh, apart from its contribution to a quicker, more efficient development flow, turns out to be a really helpful element inspection tool as
            well.`,
    },
    {
      type: 'p',
      innerText: `Let’s take a look.`,
    },
    {
      type: 'img',
      url: 'live-reload-ui.gif',
      alt: 'Live Reload demo gif',
    },
    {
      type: 'p',
      innerText: `Combining the power of Fast Refresh with a quick snippet, you can get exactly what you need in no time. All without leaving your IDE.`,
    },
    {
      type: 'p',
      innerText: `Example: Make a <code>bred</code> snippet that creates a red <code>border</code>, use it inside any element, hit <code>CMD+S</code> and see your
            element pop on screen. You can then adjust or enhance your element’s styling to your liking. This might seem simple and limited, but in practice turns
            out to be just what you need 95% of the time.`,
    },
    {
      type: 'p',
      innerText: `This method will also mean you don’t have to open inspect pop-ups and menus, and disrupt your coding workflow. Debug-as-you-go with this simple trick.`,
    },
    {
      type: 'h2',
      innerText: `7. Use Fast Refresh for Debugging Your Code`,
    },
    {
      type: 'p',
      innerText: `An even more useful trick when using Fast Refresh is the ability to check the values of any variables from the current frame. Consider this example:`,
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
      innerText: `In the screenshot, the <code>stat</code>'s value seems to aways be “-”. This indicates that the stat variable’s structure is not quite right, so we need to inspect it.`,
    },
    {
      type: 'p',
      innerText: `One way to inspect data in React Native is firing up the remote debugger, un-tab the Chrome window (otherwise RN will whine about background tabs),
            open dev tools, open the current file, set a breakpoint right before the <code>return</code> of the <code>render</code> function, reload the app,
            navigate in your app to this exact screen and scenario, pray for no source map bugs, and then inspect your received data.`,
    },
    {
      type: 'p',
      innerText: `We can do this more easily if we log our <code>stats</code> variable, navigate to this screen, and then check the console for the logged data.`,
    },
    {
      type: 'p',
      innerText: `But Fast Refresh enables us to go a step further:`,
    },
    {
      type: 'pre',
      innerText: `
  <View>
    {stats.map(stat => 
      <Stat dog={<b>console.log(stat)</b>} {...stat} />
    )}
  </View>`,
    },
    {
      type: 'p',
      innerText: `Due to the nature of the <code>render</code> function, each and every time it is called, every attribute of every element is evaluated to be then sent
            down as props.`,
    },
    {
      type: 'p',
      innerText: `However, here we don’t care about the “to be sent as props” part, we only care about the “is evaluated” part.`,
    },
    {
      type: 'p',
      innerText: `Assigning <code>console.log(stat)</code> to a completely arbitrary and non-existent attribute (in this case “dog” — a random string that I’ve found
              handy) and then saving to trigger Fast Refresh, our render function will fire, triggering an evaluation of our <code>dog</code> attribute.`,
    },
    {
      type: 'img',
      url: `console.jpg`,
      alt: `Console with code`,
    },
    {
      type: 'p',
      innerText: ` And, of course, we can now see that we actually need to spread <code>stat.content</code> and not <code>stat</code>, as our data was nested under
            <code>content</code>. Nice!`,
    },
    {
      type: 'p',
      innerText: `Happy coding!`,
    },
  ],
};
