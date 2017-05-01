import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../components/dashboard.component';
import { HomeComponent } from '../components/pages/home/home.component';
import { AboutComponent } from '../components/pages/about/about.component';

import { PageNotFoundComponent } from '../components/pages/page-not-found/page-not-found.component';

const routes : Routes  = [
		{
		  path: '',
		  redirectTo: '/home',
		  pathMatch: 'full'
		},
		{
			path: 'home',
			component: HomeComponent,
			data:{ title: 'Home Page'}
		},
		{
			path: 'about',
			component: AboutComponent
		},
		{ 
			path: '**', 
			component: PageNotFoundComponent 
		}
	];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

export const routingComponents = [DashboardComponent, HomeComponent, AboutComponent, PageNotFoundComponent];