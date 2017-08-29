import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

data: any;

  constructor(private translate: TranslateService, private dataService: DataService) {
    translate.addLangs(["en", "es"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');

    this.data = dataService.myData();
  }

  ngOnInit() {

  }

}
