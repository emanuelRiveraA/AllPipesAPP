import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

    public nameLower: string = 'judith';
    public nameUpper: string = 'JUDITH';
    public fullName: string = 'JuDitH aLeJaNdRa';

    public customDate: Date = new Date();
}
