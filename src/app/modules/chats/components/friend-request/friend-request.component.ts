import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../../../core/services/chats.service';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../auth/store/auth.reducer';
import { selectUserId } from '../../../auth/store/auth.selectors';
import { FriendForm } from '../../../core/models/forms.model';
import { AppState } from '../../../../store/app.reducer';
import { ChatUser } from '../../../core/models/responseModel';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.scss'],
})
export class FriendRequestComponent implements OnInit {
  id$!: string;
  friends: ChatUser[] = [];

  constructor(
    private chatService: ChatsService,
    private store: Store<AppState>,
    private notifierService: NotifierService,
  ) {}
  ngOnInit(): void {
    this.store.select(selectUserId).subscribe({
      next: (id) => {
        if (id) {
          this.id$ = id;
          console.log(id);
          this.getFriends(id);
        }
      },
    });
  }

  getFriends(id: string) {
    this.chatService.getFriendRequest(id).subscribe((data) => {
      this.friends = data;
    });
  }

  acceptFriend(friendId: string) {
    const friendForm = new FriendForm(this.id$, friendId);
    this.chatService.acceptFriend(friendForm).subscribe((data) => {
      this.notifierService.notify('success', data.message);
    });
  }
}
