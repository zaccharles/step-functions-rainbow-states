<h1 align="center">🌈 step-functions-rainbow-states</h1>
<p align="center">Browser extension to color AWS Step Functions states based on their prefix</p>
<br>
<div align="center">
  <a href="https://github.com/zaccharles/step-functions-rainbow-states/blob/master/LICENSE" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/github/license/zaccharles/step-functions-rainbow-states.svg" alt="license" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20%F0%9F%8C%88%20Rainbow%20States!%20by%20%40zaccharles%0A%0ABrowser%20extension%20to%20color%20AWS%20Step%20Functions%20states%20based%20on%20their%20prefix.%0A%0A%23serverless%20%23aws%20%23stepfunctions" target="_blank" rel="noreferrer">
     <img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social" alt="tweet" />
  </a> 
</div>
<br>

<p align="center">
  <a
    href="https://www.buymeacoffee.com/zaccharles"
    target="_blank"
    rel="noreferrer"
  >
    <img
      src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
      alt="Buy Me A Coffee"
      height=50
    />
  </a>
</p>

<hr />

## Description

Larger state machines can be hard to visually navigate. Adding color helps distinguish one group of states from another.

This extension colors states in the AWS Step Functions Workflow Studio based on their name prefix.

For example, `Process Queue: Get Messages` and `Process Queue: Delete Messages` would be the same color.

Why prefixes? They're often already there! State names must be unique within a Step Functions state machine. To avoid naming conflicts in larger state machines, it's common to prefix the names of related states (the CDK provides methods like prefixStates to make this easy).

## Features

 * Color states based on their name prefix (`"<prefix>: <name>"`)
 * Support for [AWS Step Functions Workflow Studio]

## Screenshot
![Screenshot](./screenshot.png)

## Install

| [![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/72.0.0/chrome/chrome_48x48.png)](/) | [![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/72.0.0/firefox/firefox_48x48.png)](/) | [![Opera](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/72.0.0/opera/opera_48x48.png)](/) | [![Edge](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/72.0.0/edge/edge_48x48.png)](/) | [![Brave](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/72.0.0/brave/brave_48x48.png)](/) | [![vivaldi](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/72.0.0/vivaldi/vivaldi_48x48.png)](/) |
| --------------------------------------------------------------------------------------------- |------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| Coming Soon                                                                                  | Coming Soon                                                                                     | Coming Soon                                                                               | Coming Soon                                                                            | Coming Soon                                                                                      | Coming Soon                                                                                         |

## Bugs

Please file an issue [here](https://github.com/zaccharles/step-functions-rainbow-states/issues/new) for bugs, missing documentation, or unexpected behavior.

## Attribution

Extension template [web-extension-starter](https://github.com/zaccharles/step-functions-rainbow-states) by abhijithvijayan  
Rainbow icons created by [kosonicon - Flaticon](https://www.flaticon.com/free-icons/rainbow)

## License

GNU GPLv3 © [Zac Charles](https://twitter.com/zaccharles)
