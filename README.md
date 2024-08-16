How to use:
1. Copy the script to the App Script connected to the Google Sheet
2. Add onEdit trigger to the App Script
3. Create sheet named "Config" in the Google Sheet
4. Add either "googlechat" or "slack" in the "B1" cell in the "Config" sheet
5. Add either google chat webhook url in the cell "B2" of the "Config" sheet or slack webhook url in the cell "B3" of the "Config" sheet.
6. Create "Triggers" sheet in the Google Sheet
7. Add some triggers in the "Triggers" sheet, for example add checkbox in the "A1" cell.
8. Add the function call at the bottom of onEdit(e) function, for example sendMessage("Triggers", "A1", "Test message", googleUrl) will send message "Test message" to the chat where the webhook url leads, triggered by the "A1" checkbox in sheet "Triggers" check.
