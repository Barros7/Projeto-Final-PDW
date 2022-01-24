import { Component, OnInit } from '@angular/core';
import { RequestProfile } from 'src/app/resources/models/profile/RequestProfile';
import { ResponseProfile } from 'src/app/resources/models/profile/ResponseProfile';
import { AlertService } from 'src/app/resources/services/alert/alert.service';
import { ProfileService } from 'src/app/resources/services/profile/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public RequestProfile!: RequestProfile;

  constructor(
    private ProfileService: ProfileService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.RequestProfile = new RequestProfile();
  }

  public doManagementProfile() :void{
    this.ProfileService.doManagementProfile(this.RequestProfile).subscribe((data)=>{
      this.router.navigate(['profile']);
    },
    (httpError) =>{
      this.alertService.error(httpError, httpError.error.message);
      //console.error(httpError);
    }
    )
  }
}
