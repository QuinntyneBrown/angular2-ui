import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroComponent } from '../hero.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
    declarations: [HeroComponent],
    imports: [BrowserModule],
    bootstrap: [HeroComponent],
})
export class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);