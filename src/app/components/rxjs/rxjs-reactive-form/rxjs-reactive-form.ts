import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { combineLatest, debounceTime } from 'rxjs';

@Component({
  selector: 'app-rxjs-reactive-form',
  imports: [NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './rxjs-reactive-form.html',
  styleUrl: './rxjs-reactive-form.css'
})
export class RxjsReactiveForm implements OnInit{
  userForm!: FormGroup;
  passwordMismatch = false;
  searchResults: string[] = [];

  serachControl : FormControl = new FormControl("ABC");

  constructor(private fb: FormBuilder) {

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      subscribe: [false],
      email: [''],
      password: [''],
      confirmPassword: [''],
      age: [''],
      drivingLicense: [''],
      country: [''],
      currency: [''],
      search: ['']
    });
  }

  ngOnInit(): void {

    this.serachControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe((search: string)=>{
      console.log('search Chnages ' +search )
    })
    this.userForm.controls['confirmPassword'].disable();
    this.userForm.controls['name'].valueChanges.subscribe((res:string)=>{
      //debugger;
    })

    // this.serachControl.valueChanges.subscribe((searchText: string)=>{
    //   console.log("searchText " + searchText)
    // })

    this.userForm.valueChanges.subscribe((formValue: any)=>{
      debugger;
    })

    this.userForm.controls['password'].valueChanges.subscribe((Res:any)=>{
      if(Res != '') {
        this.userForm.controls['confirmPassword'].addValidators([Validators.required]);
       this.userForm.controls['confirmPassword'].enable();
      }
    })

    this.userForm.statusChanges.subscribe((res:any)=>{
      debugger;
    })

    combineLatest([
      this.userForm.controls['password'].valueChanges,
      this.userForm.controls['confirmPassword'].valueChanges
    ]).subscribe(([pwd,confirmPwd])=>{
      this.passwordMismatch = pwd && confirmPwd && pwd !== confirmPwd;
    })
  }

  onSubmit() {

  }
}
