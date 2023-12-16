import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsRoutingModule } from './chats-routing.module';
import { ChatsComponent } from './components/chats/chats.component';
import { FormsModule } from '@angular/forms';
import { FindFriendComponent } from './components/find-friend/find-friend.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';
import { FriendRequestComponent } from './components/friend-request/friend-request.component';
import { FriendSentRequestComponent } from './components/friend-sent-request/friend-sent-request.component';

@NgModule({
  declarations: [ChatsComponent, FindFriendComponent, FriendListComponent, FriendRequestComponent, FriendSentRequestComponent],
  imports: [CommonModule, ChatsRoutingModule, FormsModule],
})
export class ChatsModule {}
