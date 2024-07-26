# Quote Time Remover - Thunderbird Extension

## Overview

Quote Time Remover is a Thunderbird extension that automatically removes the timestamp from the first quoted reply in your email responses. This extension is designed to clean up email threads by removing unnecessary time information while preserving the date.

## Features

- Automatically removes the time from the first quoted reply in compose windows
- Works on reply and reply-all actions
- Preserves the date of the quoted email
- Only processes each compose window automatically once to avoid unintended modifications
- Includes a manual trigger button labeled "Remove Time" for additional removals or edge cases

## Installation

1. Download the signed .xpi file from the repo.
2. In Thunderbird, go to Tools > Add-ons.
3. Click the gear icon in the top right and select "Install Add-on From File".
4. Navigate to and select the downloaded .xpi file.
5. Click "Add" when prompted to add the extension.
6. The extension is now installed and will persist between Thunderbird restarts.

If Thunderbird removes the plugin between restarts, you'll need to repeat the above steps.

## Usage

The extension works in two ways:

1. Automatic:
   - When you reply to an email or start a new compose window, the extension will check for a timestamp in the quoted text.
   - If found, it will remove the time portion from the first quoted reply, leaving only the date.
   - This automatic process happens only once per compose window.

2. Manual:
   - If you need to remove the time again or the automatic process didn't catch it, you can use the manual trigger.
   - Look for the "Remove Time" button in the compose window toolbar.
   - Click the button to remove the time from the quote, even if it has been removed automatically before.

## Example

Before:
```
On 7/25/24 5:45 AM, John Doe wrote:
> Hello, how are you?
```

After:
```
On 7/25/24, John Doe wrote:
> Hello, how are you?
```

## Troubleshooting

If the extension doesn't seem to be working:

1. Ensure it's enabled in Thunderbird's Add-ons Manager.
2. Try restarting Thunderbird.
3. Use the "Remove Time" button to manually trigger the time removal.
4. Check the Browser Console (Tools > Developer Tools > Browser Console) for any error messages.

## Contributing

Contributions to improve Quote Time Remover are welcome! Please feel free to submit pull requests or create issues for bugs and feature requests.

## License

This project is licensed under the MIT License:

```
MIT License

Copyright (c) 2024 jr180180

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Contact

GitHub: [jr180180](https://github.com/jr180180)

## Acknowledgments

Thanks to the Thunderbird development team for providing the WebExtension APIs that make this extension possible.

