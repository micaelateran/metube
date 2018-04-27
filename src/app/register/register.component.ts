import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public email: string;
  public password : string;

  constructor(
    public authService : AuthService) {
  
  }

  ngOnInit() {
  }

  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
    .then((res) => {
      console.log("BIEEEN")
    }).catch( (err) => {
     console.log("MAAAL")
    });
  }
}
