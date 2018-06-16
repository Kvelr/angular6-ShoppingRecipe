import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    @Output() pageChangedEvent = new EventEmitter<string>();
    onNavSelect(navToSelect: string) {
        this.pageChangedEvent.emit(navToSelect);
    }
}




