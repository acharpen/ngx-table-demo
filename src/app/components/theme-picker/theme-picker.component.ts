import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html'
})
export class ThemePickerComponent {
  public constructor() {
    this.toggleTheme({ checked: false });
  }

  public toggleTheme({ checked }: { checked: boolean }): void {
    const bgPrimary = checked ? 'rgb(51, 51, 51)' : 'rgb(255, 255, 255)';
    const bgSecondary = checked ? 'rgb(37, 37, 38)' : 'rgb(250, 250, 250)';
    const borderPrimary = checked ? 'rgb(60, 64, 67)' : 'rgb(228, 228, 231)';
    const borderSecondary = checked ? 'rgb(133, 133, 133)' : 'rgb(212, 212, 216)';
    const btn = checked ? 'rgb(147, 197, 253)' : 'rgb(30, 64, 175)';
    const btnHover = checked ? 'rgb(96, 165, 250)' : 'rgb(30, 58, 138)';
    const rowHover = checked ? 'rgb(32, 33, 36)' : 'rgb(232, 240, 254)';
    const scrollbar = checked ? 'rgb(66, 66, 66)' : 'rgb(241, 241, 241)';
    const scrollbarThumb = checked ? 'rgb(104, 104, 104)' : 'rgb(193, 193, 193)';
    const textLink = checked ? 'rgb(147, 197, 253)' : 'rgb(30, 64, 175)';
    const textPrimary = checked ? 'rgb(212, 212, 216)' : 'rgb(39, 39, 42)';

    document.body.style.setProperty('--oo-table-color-bg-primary', bgPrimary);
    document.body.style.setProperty('--oo-table-color-bg-secondary', bgSecondary);
    document.body.style.setProperty('--oo-table-color-border-primary', borderPrimary);
    document.body.style.setProperty('--oo-table-color-border-secondary', borderSecondary);
    document.body.style.setProperty('--oo-table-color-btn', btn);
    document.body.style.setProperty('--oo-table-color-btn--hover', btnHover);
    document.body.style.setProperty('--oo-table-color-row--hover', rowHover);
    document.body.style.setProperty('--oo-table-color-scrollbar', scrollbar);
    document.body.style.setProperty('--oo-table-color-scrollbar-thumb', scrollbarThumb);
    document.body.style.setProperty('--oo-table-color-text-link', textLink);
    document.body.style.setProperty('--oo-table-color-text-primary', textPrimary);
  }
}
