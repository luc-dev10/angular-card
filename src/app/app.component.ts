import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      content: 'I saw this neat tree. It grows pineapples and bananas.',
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      content:
        'Here is a picture of a snowy mountain. Enjoy the view from heaven.',
    },
    {
      title: 'Biking through the snow',
      imageUrl: 'assets/biking.jpeg',
      content: 'Biking is great. A snowy day is the best day for biking.',
    },
  ];
}
