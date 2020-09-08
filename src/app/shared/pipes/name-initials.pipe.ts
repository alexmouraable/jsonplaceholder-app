import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameInitials'
})
export class NameInitialsPipe implements PipeTransform {

  transform(name: string): string {
    const separationCharacter: string = ' ';
    const partsOfTheName: string[] = name.split(separationCharacter);
    const firstName: string = partsOfTheName[0];
    const lastName: string = partsOfTheName[partsOfTheName.length - 1];
    return firstName.charAt(0) + lastName.charAt(0);
  }

}
