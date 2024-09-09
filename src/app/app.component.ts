import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


interface UserForm {
  name: string;
  email: string;
  gender: string;
  agree: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm: FormGroup;
  history: UserForm[] = [];
  undoneHistory: UserForm[] = [];



  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: [''],
      email: [''],
      gender:[''],
      agree: [false],
    });
    this.history.push(this.myForm.value);
  }
  ngOnInit() {
    this.formChanges();
  }

  formChanges() {
    this.myForm.valueChanges.subscribe(value => {
      this.history.push(this.myForm.value);
    });
  }

 undo() {
  if (this.canUndo()) {
    const lastValue = this.history.pop(); 
    if (lastValue) { 
      this.undoneHistory.push(lastValue);
      const previousValue = this.history[this.history.length - 1];
      if (previousValue) { 
        this.myForm.setValue(previousValue, { emitEvent: false });
      }
    }
  }
}
  
  redo() {
    if (this.canRedo()) {
      const nextValue = this.undoneHistory.pop();
      if (nextValue) {
        this.history.push(nextValue);
        this.myForm.setValue(nextValue, { emitEvent: false });
      }
    }
  }
  
  canUndo(): boolean {
    return this.history.length > 1;
  }
  
  canRedo(): boolean {
    return this.undoneHistory.length > 0;
  }
  
}
