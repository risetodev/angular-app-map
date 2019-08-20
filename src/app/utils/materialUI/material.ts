import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";


@NgModule({
  imports: [MatInputModule, MatButtonModule, MatIconModule, MatExpansionModule],
  exports: [MatInputModule, MatButtonModule, MatIconModule, MatExpansionModule]
})
export class MaterialModule {}
