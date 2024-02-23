# inspirobot-chrome-extension
A brief moment of inspiration during your day. 

# InspiroBot Chrome Extension

This Chrome extension provides you with a dose of inspiration by displaying a unique, auto-generated quote image from InspiroBot each time the extension's popup is opened.

## About InspiroBot

InspiroBot is an AI that generates inspirational quote images. The InspiroBot API allows developers to retrieve a URL to a newly generated quote image. The API endpoint is:
https://inspirobot.me/api?generate=true
When this endpoint is called, it returns a plain text response with a direct URL to the generated image.

## How the Extension Works

The extension uses a background script to call the InspiroBot API. When you click on the extension icon, a popup is displayed, and the script fetches a new quote image by making a request to the InspiroBot API. The image URL received in the response is then used to update the `src` attribute of an `img` element within the popup, displaying the inspirational quote image to the user.

## Installation

To install the extension in Chrome:

1. Download the extension files from this GitHub repository.
2. Extract the ZIP file or clone the repository to your local machine.
3. Open Google Chrome and navigate to the Extensions page (`chrome://extensions/`).
4. Enable "Developer mode" by toggling the switch in the top-right corner.
5. Click on "Load unpacked" and select the directory containing the extension files.
6. The extension should now be installed and visible in your list of Chrome extensions.

## Usage

To use the extension:

1. Click on the extension icon in the Chrome toolbar.
2. A popup will appear displaying a new inspirational quote image from InspiroBot.
3. If you want a new quote, simply close the popup and click the extension icon again.

## Customization

The extension's appearance can be customized by modifying the `popup.html` and `popup.css` files. You can change the color scheme, layout, and other styles as desired.

## Contributing

If you would like to contribute to the development of this extension, please feel free to fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

## Acknowledgments

- Thanks to InspiroBot (https://inspirobot.me/) for providing the API used in this extension.
- This extension is an independent project and is not officially affiliated with InspiroBot.
