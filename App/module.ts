import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppMyComponent} from './app.mycomponent'


@NgModule({
    declarations:[AppMyComponent],
    imports:[BrowserModule],
    bootstrap:[AppMyComponent]
})

export class MyModule{
    
}