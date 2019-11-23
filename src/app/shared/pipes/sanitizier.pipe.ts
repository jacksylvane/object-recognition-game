import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizier'
})
export class SanitizierPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(style: any, ...args: any[]): any {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

}
