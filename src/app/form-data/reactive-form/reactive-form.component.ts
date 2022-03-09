import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { first, firstValueFrom, Subscription, take } from 'rxjs';
import { ApiService } from '../../Services/api.service';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit , OnDestroy {
  constructor(
    private fb: FormBuilder,
    private _http: HttpClient,
    private _route: Router,
    private API: ApiService
  ) {}
  dataForm: FormGroup;
  FakeUser = 'Archit';
  Course = ['Btech', 'BCA', 'MCA', 'BCA'];
  Stream = ['CSE', 'ME', 'IT', 'CIVIL'];
  loading: boolean = false;
  subcriptions:Subscription[] =[];
  ngOnInit(): void {
    this.dataForm = new FormGroup({
      Name: new FormControl(null, [
        Validators.required,
        this.checkUser.bind(this),
      ]),
      email: new FormControl(null, [Validators.email]),
      pass: new FormGroup(
        {
          password: new FormControl(null, [
            Validators.required,
            Validators.min(3),
          ]),
          confirmPass: new FormControl(null, Validators.required),
        },
        this.checkPasswords
      ),
      course: new FormControl(null, Validators.required),
      stream: new FormControl(null),
      hobbies: new FormArray([]),
    });
    this.subcriptions.push(this.dataForm.get('course')!.valueChanges.subscribe((data) => {
      if (this.dataForm.value.course == 'Btech') {
        this.dataForm.get('stream')?.setValidators(Validators.required);
      } else this.dataForm.get('stream')?.clearValidators();
      this.dataForm.get('stream')?.updateValueAndValidity();
    }))
    
    this.loading = true;
  
    this.API.getAllPosts().pipe(take(1)).subscribe
    this.API.getAllPosts().subscribe((data) => {
      this.allPost = data;
      this.loading = false;
    });
  }
  allPost: any = [];
  get hobbies() {
    return (this.dataForm.get('hobbies') as FormArray).controls;
  }
  onAddHobbies() {
    const control = new FormControl(null);
    (<FormArray>this.dataForm.get('hobbies')).push(control);
  }
  onSubmit() {
    console.log(this.dataForm.value);
    this.API.submit(this.dataForm);
    this.dataForm.reset();
  }
  checkUser(control: FormControl) {
    if (control.value == this.FakeUser) {
      return { NameNotValid: true };
    }
    return null;
  }
  checkPasswords = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPass')?.value;
    return pass === confirmPass ? null : { notSame: true };
  };
  setDefault() {
    this.dataForm.patchValue({
      Name: 'ABC',
      email: 'abc@gmail.com',
      password: '123123',
      course: 'BCA',
    });
  }
  deleteData(id: number) {
    this.loading = true;
    this.API.delete(id).subscribe((data) => {
      console.log(data);
      this.loading = false;
    });
  }
  viewPost(id: number) {
    this.loading = true;
    this._route.navigate(['/post', id], {
      queryParams: { id: id },
    });
    this.loading = false;
  }
  ngOnDestroy(): void {
      this.subcriptions.forEach((subcription)=>{
        subcription.unsubscribe();
      })
      this.subcriptions = [];
  }
}
