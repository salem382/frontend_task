import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  history: any[] = [];
  undoneHistory: any[] = [];


  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: [''],
      email: [''],
      gender:[''],
      agree: [false],
    });
    this.history.push(this.myForm.value);
    this.myForm.valueChanges.subscribe(value => {
      this.history.push(this.myForm.value);
      console.log("this.history flag => ", this.history);
    });
  }

  undo() {
    console.log("this.canUndo() flag => ", this.canUndo());
    console.log("this.undoneHistory flag => ", this.undoneHistory);
    console.log("this.history flag => ", this.history);

    if (this.canUndo()) {
      this.undoneHistory.push(this.history.pop());
      const previousValue = this.history[this.history.length - 1];
      this.myForm.setValue(previousValue, { emitEvent: false });
    }
  }
  
  redo() {
    console.log("this.canRedo() flag => ", this.canRedo());
    console.log("this.undoneHistory flag => ", this.undoneHistory);
    console.log("this.history flag => ", this.history);
    
    if (this.canRedo()) {
      const nextValue = this.undoneHistory.pop();
      this.history.push(nextValue);
      this.myForm.setValue(nextValue, { emitEvent: false });
    }
  }
  
  canUndo(): boolean {
    return this.history.length > 1;
  }
  
  canRedo(): boolean {
    return this.undoneHistory.length > 0;
  }
  
}
