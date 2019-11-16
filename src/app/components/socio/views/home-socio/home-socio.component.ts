import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/firebase/user.service';

@Component({
  selector: 'app-home-socio',
  templateUrl: './home-socio.component.html',
  styleUrls: ['./home-socio.component.scss']
})
export class HomeSocioComponent implements OnInit {

  public changeRoleEmail: string;
  public changeRoleNewRole: string = 'socio';

  constructor(private userService: UserService) {}

  ngOnInit() {
  }

  public ChangeRole(): void
  {
      this.userService.SetRole(this.changeRoleEmail, this.changeRoleNewRole);
  }    
}
