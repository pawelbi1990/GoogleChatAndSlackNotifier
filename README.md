1. Copy the script to the App Script connected to the Google Sheet.
2. Add an onEdit trigger to the App Script.
3. Create a sheet named "Config" in the Google Sheet.
4. In the "Config" sheet, enter either "googlechat" or "slack" in cell B1.
5. In the "Config" sheet, enter the Google Chat webhook URL in cell B2 or the Slack webhook URL in cell B3.
6. Create a sheet named "Triggers" in the Google Sheet.
7. In the "Triggers" sheet, add some triggers. For example, place a checkbox in cell A1.
8. Add the function call at the bottom of the onEdit(e) function. For example, sendMessage("Triggers", "A1", "Test message", googleUrl) will send the message "Test message" to the chat associated with the webhook URL, triggered by checking the checkbox in cell A1 of the "Triggers" sheet.
