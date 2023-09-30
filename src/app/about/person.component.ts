import { Component, Input } from '@angular/core';

@Component({
  selector: 'about-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {

  @Input() name?: string;
  @Input() img?: string;
  @Input() title?: string;
  @Input() email?: string;

  constructMailto(): string {
    if (!!this.email) {
      return '';
    }

    return `mailto:${this.email}`;
  }
}
