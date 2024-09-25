import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

}
