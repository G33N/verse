import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  PROFILE = {
    NAME: "VERSE"
  }

  @Input() PageTitle: String;

  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "es"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');

    function showPageTitle(PageTitle) {
      if (PageTitle) {

      }
      else {
        PageTitle = "Home";
      }
    }
  }

  ngOnInit() {

  }

}
