import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "es"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  ngOnInit() {
  }

}
