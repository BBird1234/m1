import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Set initial state based on the current route
    this.isChecked = this.router.url === '/mappage'; // Updated this line
  }

  enteredSearchValue: string = '';
  isChecked: boolean = false;

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

  togglePage(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    setTimeout(() => {
      if (isChecked) {
        this.router.navigate(['/mappage']); // Updated this line
      } else {
        this.router.navigate(['/']);
      }
    }, 300); // Delay to allow animation to complete
  }
}
