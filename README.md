# Angular Form with Undo/Redo Functionality

This project demonstrates an implementation of undo/redo functionality for an Angular form using reactive forms. It allows users to make changes to form fields and undo/redo these changes while preserving form state history.

## Features
- Undo: Reverts the form to its previous state
- Redo: Restores the form to a state that was undone.
- Form Fields: Name, Email, Gender, and an "Agree to terms" checkbox.

## How to Test the Undo/Redo Functionality
1.Clone the repository:
  ```bash
 git clone https://github.com/salem382/frontend_task.git
 cd frontend_task
 ```
2.Install dependencies:
```bash
npm install
```

3.Run the development server:
```bash
ng serve
```
4.Open the application in a web browser:
```bash
https://localhost:4200
```
## Test the Undo/Redo functionality:
- Fill out the form.
- Click Undo to revert to the previous state.
- Click Redo to restore the undone changes.
## Future Improvements
- Add support for nested form controls or arrays.
- Provide user feedback when no more undo/redo operations are available
- Store form state in a more efficient structure for complex forms.
