import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  jsonData: any = {
    notification: [],
    message: [],
  };
  notifications: any;
  messagesData: any;

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.notifications = [
      {
        message: 'Patient appointment booking',
        author: 'John Doe',
        function: 'added new task',
        time: '4 mins ago',
      },
      {
        message: 'Patient appointment booking',
        author: 'John Doe',
        function: 'added new task',
        time: '1 hour ago',
      },
      {
        message: 'Patient appointment booking',
        author: 'John Doe',
        function: 'added new task',
        time: '4 mins ago',
      },
      {
        message: 'Patient appointment booking',
        author: 'John Doe',
        function: 'added new task',
        time: '1 hour ago',
      },
      {
        message: 'Patient appointment booking',
        author: 'John Doe',
        function: 'added new task',
        time: '4 mins ago',
      },
      {
        message: 'Patient appointment booking',
        author: 'John Doe',
        function: 'added new task',
        time: '1 hour ago',
      },
    ];

    this.messagesData = [
      {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        author: 'Mike Litorus',
        time: '4 mins ago'
      },
      {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        author: 'Mike Litorus',
        time: '1 hour ago',
      },
      {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        author: 'Mike Litorus',
        time: '4 mins ago',
      },
      {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        author: 'Mike Litorus',
        time: '1 hour ago',
      },
      {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        author: 'Mike Litorus',
        time: '4 mins ago',
      },
      {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        author: 'Mike Litorus',
        time: '1 hour ago',
      },
    ];
  }

  clearData(notification: any) {
    console.log(notification);

  }

  onSubmit() {

  }
}
