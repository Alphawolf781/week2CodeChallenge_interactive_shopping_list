### Languages and Technologies Used:

1. HTML: Defines the structure of the web page and user interface elements.
2. CSS: Styles the appearance of HTML elements for visual presentation.
3. JavaScript: Provides interactive functionality, event handling, and DOM manipulation.

### Functionality:

### HTML Structure:

#### Input Field: Allows users to enter new items to be added to the shopping list.
List Container: Displays added items dynamically.

#### Buttons:
1. Add Button: Adds new items to the list.
2. Edit Button: Allows users to edit existing item names.
3. Delete Button: Removes items from the list.
4. Clear List Button: Clears all items from the list.


### CSS Styling:
Enhances the visual presentation of elements:
Uses classes and IDs to style buttons, input fields, and list items.
Provides responsive design for different screen sizes.



### JavaScript Functionality:

#### Data Management:
Array: Stores shopping list items as objects with properties (name, checked).

#### Event Handling:

### Add Button:

Captures user input from the input field.
Adds new items to the shopping list array.
Renders updated list items in the DOM.

### Edit Button:

Allows users to modify existing item names directly in the list.
Updates the item's name in the array and re-renders the list.

### Delete Button:

Removes selected items from the shopping list array.
Updates the list by removing the corresponding item from the DOM.

### Mark as Purchased:

Toggles the checked property of an item when clicked.
Applies a property (strikethrough) to indicate purchased status.

### Clear List Button:

Clears all items from the shopping list array.
Updates the DOM to reflect the empty list.

### Input Validation:
Ensures input fields are not empty before adding new items.
Validates user actions to prevent unintended operations (deleting or editing non-existent items).

### DOM Manipulation:
Dynamically updates the HTML content to reflect changes in the shopping list array.
Uses DOM methods (createElement, appendChild, textContent) to manipulate and render elements.