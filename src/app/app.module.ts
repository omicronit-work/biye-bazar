import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NewCollentionsComponent } from './components/new-collentions/new-collentions.component';
import { GroomBrideComponent } from './components/groom-bride/groom-bride.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { EventsComponent } from './components/events/events.component';
import { WeddingWebsitesComponent } from './components/wedding-websites/wedding-websites.component';
import { BestProductsComponent } from './components/best-products/best-products.component';
import { DiscountProductsComponent } from './components/discount-products/discount-products.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { ExclusiveCollectionComponent } from './components/exclusive-collection/exclusive-collection.component';
import { StoriesComponent } from './components/stories/stories.component';
import { PressComponent } from './components/press/press.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    CategoriesComponent,
    NewCollentionsComponent,
    GroomBrideComponent,
    FeaturedProductsComponent,
    EventsComponent,
    WeddingWebsitesComponent,
    BestProductsComponent,
    DiscountProductsComponent,
    AccessoriesComponent,
    ExclusiveCollectionComponent,
    StoriesComponent,
    PressComponent,
    NewsletterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
