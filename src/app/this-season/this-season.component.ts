import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-this-season',
  templateUrl: './this-season.component.html',
  styleUrls: ['./this-season.component.scss']
})
export class ThisSeasonComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "es"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  ngOnInit() {
  }

}
