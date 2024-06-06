
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SupabaseService } from '../supabase.service';// Import your Supabase configuration
import { createClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-sign',
   templateUrl: './sign.component.html',
   styleUrls: ['./sign.component.css']
 })
 export class SignComponent{
  loginForm!: FormGroup;
  email: string = '';
  password: string = '';

   error: string | null = null; // State for holding the error message
   constructor(
    private supabaseService: SupabaseService,
    private router: Router,
    //private toastr: ToastrService
  ) { }


async login(): Promise<void> {
  const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
    
    try {
       const response = await supabase.auth.signInWithPassword({
         email: 'example@email.com',
         password: 'example-password',
       });
    

      if (response.error === null) {
        localStorage.setItem("token", response.data.session.access_token);
      // this.toastr.success("Login successful");
       this.router.navigate(["/home"]);
      } else {
          this.error = "Invalid email or password.";  //Set the error message if login fails
         //this.toastr.error("Invalid email or password."); //  Display the error message in a toast
        }
     } catch (error) {
       this.error = "An error occurred. Please try again later.";
       console.log("An error occurred. Please try again later.");
      }
   }


 
  }



