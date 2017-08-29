import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routing';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateComponent } from './template/template.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ThisSeasonComponent } from './this-season/this-season.component';
import { FollowUsComponent } from './follow-us/follow-us.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';

// Pipes
import { ObjectArrayPipe } from './object-array.pipe';

// Services
import { DataService } from './data.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    HeaderNavbarComponent,
    DashboardComponent,
    TemplateComponent,
    LoginComponent,
    SettingsComponent,
    GalleryComponent,
    ThisSeasonComponent,
    FollowUsComponent,
    DashboardHeaderComponent,
    ObjectArrayPipe
  ],
  imports: [
    BrowserModule,
    routes,
    HttpClientModule,
    TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
