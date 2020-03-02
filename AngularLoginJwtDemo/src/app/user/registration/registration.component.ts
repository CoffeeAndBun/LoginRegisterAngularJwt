import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  constructor(public service : UserService, private toastr : ToastrService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null){
      this.router.navigate(['/home']);
    }
  }

  onSubmit(){
    this.service.register().subscribe(
      (res : any) => {
        if(res.succeeded){
          this.service.formModel.reset();
          this.toastr.success('New User Created', 'Registration Successful');
        }else{
            res.errors.forEach(element => {
              switch(element.code){
                case 'DuplicateUserName':
                  //Username is already taken
                  break;

                default:
                  //Registration failed
                  break;
              }
            });
        }
      },
      err => {
        console.log(err);
        this.toastr.error('Error', 'Registration Failed');
      }
    );
  }

}
