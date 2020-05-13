module.exports = {
  date: '20/03/2020',
  type: 'Article',
  title: '7 Ways In Which React Native Is Better Than the Web',
  hidden: true,
  ogUrl: 'https://bit.do/',
  subtitle: "It's all a 'what could've been' story now.",
  body: [
    {
      type: 'p',
      innerText: `"It makes no sense to compare 2 technologies that are meant for 2 different things", you might say. But having spent almost 3 years writing React Native, and then once every few months occasionally coming back to the web, I couldn't help but notice how much less sense the web makes.`,
    },
    {
      type: 'p',
      innerText: `One can only imagine how good the web could've been, have it not been mediocrily designed initially, and then patched over and over throughout the years.`,
    },
    {
      type: 'h2',
      innerText: `1. Two Primitives. Nothing more.`,
    },
    {
      type: 'p',
      innerText: `You could blame it on HTML's age, or the fact that the web gains more from meaning to its markup, but the crux of the matter is that the plethora of elements that are available and used all over the web contribute greatly to why HTML and web in general became such a unstandardized, non-consistent mess.`,
    },
    {
      type: 'p',
      innerText: `Why do you need p, span, h1, h2, h3, h4, h5, h6, u, a, i and 15 other options to achieve the same thing? - You don't. And React Native's <code>Text</code> and <code>View</code> components prove just that.`,
    },
    {
      type: 'p',
      innerText: `Your code is cleaner. Your styles are more predictable. The language spoken through markup is always the same. And at the end of the day, you get a much, much more consistent, much more standardized and maintainable codebase.`,
    },
    {
      type: 'h2',
      innerText: `2. No Cascading`,
    },
    {
      type: 'p',
      innerText: `You might hate this at first, because no cascading also means more style declarations. But this becomes such an important and obvious gain as the project grows, that you'll hate ever having to deal with CSS again.`,
    },
    {
      type: 'p',
      innerText: `Your styles become so much more straightforward, and your UIs become so much more predictable, that building/fixing them is just a joy.`,
    },
    {
      type: 'p',
      innerText: `Being able to just plug-n-play any library that you find on the web and be 100% sure that it isn't influenced by any of your styles and just works - really nice. The fact that your code doesn't <b>rely</b> on the order of its style declarations - really nice. The fact that your code never gets to a point where the only way out of nasty bugs is filling your code with <b>!important</b>s - incredibly nice.`,
    },
    {
      type: 'p',
      innerText: `No cascading also means much easier to track any element's style/behaviour, and makes your app much less prone to weird UI bugs. You have to write about 10-15% more code, but the gains are without a shadow of a doubt worth it.`,
    },
    {
      type: 'h2',
      innerText: `3. The Default and Only Display Value is Flex`,
    },
    {
      type: 'p',
      innerText: `Well what can I say. If the web were to be invented today, it would most probably also have flex as the default and possibly only option. But it isn't, so it doesn't.`,
    },
    {
      type: 'h2',
      innerText: `4. Real Time Code Previews`,
    },
    {
      type: 'p',
      innerText: `Nothing that the web offers comes even close to the Fast Refresh feature in React Native. Fast Refresh gives you an instantaneous, guaranteed code preview every time you change your code: from simple UI changes to complex Javascript business logic. With Fast Refresh you'll find out instantly that it's not <code>array[array.length]</code>, but <code>array[array.length - 1]</code>.`,
    },

    {
      type: 'h2',
      innerText: `5. Everything Is Plug-n-Play`,
    },
    {
      type: 'p',
      innerText: `Any UI component that you can think of is available and ready to be used. And they work well and look good. Whereas on the web, it's more like as if you've ordered a cake and received the ingredients to make it yourself.`,
    },
    {
      type: 'h2',
      innerText: `6. Code Push`,
    },
    {
      type: 'p',
      innerText: `Whether you choose Expo's built-in code push service, or Microsoft CodePush, the result is the same. You get the ability to instantly update your live app over the air. No weird caching issues, no weird <code>?v=32</code> on your js/css files, no unbelievably complex Service Worker stuff.`,
    },
    {
      type: 'p',
      innerText: `With a single command you've pushed the code to the live app in no time, and without any hassle.`,
    },
    {
      type: 'p',
      innerText: `Service Workers are web's attempt at achieving a similar behaviour. They're not far from there, but their steep learning curve and cumbersome setup means very little apps actually use it and have it gotten right. In React Native, this is more or less a default. And it's fast. And easy.`,
    },
    {
      type: 'h2',
      innerText: `8. No Backwards Compatibility`,
    },
    {
      type: 'p',
      innerText: `<a href="https://stackoverflow.com/questions/10350142/why-is-document-all-falsy">Did you know that <code>document.all</code> is falsy, even tho it's an array with all the elements in the page?</a>`,
    },
    {
      type: 'p',
      innerText: `<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat">Or that the native Array method which flattens a nested array to a one-dimensional one is unintuitively called <code>flat</code>, not <code>flatten</code>?</a>`,
    },
    {
      type: 'p',
      innerText: `Every feature that was added on the web in the recent years is great. But they could've been much, much better if it weren't for the obligation of supporting every single weird/ancient JS/HTML version ever implemented by a website. Weird names, weird rules, weird hacks, or even just the inability to ship something altogether, they're all the results of having to develop a system with a legacy of over 20 years.`,
    },
  ],
};
