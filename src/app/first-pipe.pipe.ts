import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstPipe',
})
export class FirstPipe implements PipeTransform {
  /**
   * The filter will filter out the entered name and course
   */
  transform(value: any[], sName: string, sCourse: string): any {
    if (!value || !sName) return value;
    return value.filter(
      (data) =>
        data.name.toLocaleLowerCase().includes(sName.toLocaleLowerCase()) &&
        data.course.toLocaleLowerCase().includes(sCourse.toLocaleLowerCase())
    );
  }
}
