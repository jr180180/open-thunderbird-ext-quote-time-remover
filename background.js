browser.composeAction.onClicked.addListener(async (tab) => {
  let details = await browser.compose.getComposeDetails(tab.id);
  let body = details.body;

  // Regular expression to match the date-time pattern in quotes
  const regex = /On .+, at \d{1,2}:\d{2} (AM|PM), .+ wrote:/g;

  // Function to remove time from matched strings
  function removeTime(match) {
    return match.replace(/at \d{1,2}:\d{2} (AM|PM), /, '');
  }

  // Replace all occurrences of the pattern
  body = body.replace(regex, removeTime);

  // Update the compose window with the modified body
  await browser.compose.setComposeDetails(tab.id, { body: body });
});

