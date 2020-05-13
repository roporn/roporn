module.exports = {
  date: '13/03/2020',
  type: 'Answer',
  title: 'Maximum update depth exceeded error - how to fix',
  subtitle: '',
  body: [
    {
      type: 'h2',
      innerText: `What is the problem?`,
    },
    {
      type: 'p',
      innerText: `The issue is that you have an infinite loop somewhere in your code.`,
    },
    {
      type: 'p',
      innerText: `If you don't immediately see it, don't worry. Most often than not, this is happening due to incorrectly assigning an event handler to a function which updates the state, as in this example:`,
    },
    {
      type: 'pre',
      innerText: `
  doStuff = () => {
    this.<b>setState({ something: true });</b>
  }

  render() {
    return (
      <Button onPress={<b>this.doStuff()</b>} //error! />
    )
  }`,
    },
    {
      type: 'p',
      innerText: `In this case, <code>this.doStuff()</code> will be called each and every time that <code>render()</code> is called, which is called each time that <code>this.setState()</code> is called, which results in an infinite loop.`,
    },
    {
      type: 'h2',
      innerText: `How to fix?`,
    },
    {
      type: 'p',
      innerText: `Correctly assign your function (and not your function's return value!) as the event handler:`,
    },
    {
      type: 'pre',
      innerText: `
  doStuff = () => {
    this.setState({ something: true });
  }

  render() {
    return (
      <Button onPress={<b>this.doStuff</b>} />
    )
  }`,
    },
    {
      type: 'p',
      innerText: `Or, if you need to send parameters to your function, use an anonymous lambda function:`,
    },
    {
      type: 'pre',
      innerText: `
  doStuff = () => {
    this.setState({ something: true });
  }

  render() {
    return (
      <Button onPress={<b>(text) => this.doStuff(text)</b>} />
    )
  }`,
    },
  ],
};
