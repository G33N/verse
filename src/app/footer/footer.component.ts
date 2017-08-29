import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.scss',
  '../../../node_modules/font-awesome/scss/font-awesome.scss'
]
})
export class FooterComponent implements OnInit {

EMAIL = "info@verseproducciones.com.ar";


  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "es"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  ngOnInit() {
  }

}
