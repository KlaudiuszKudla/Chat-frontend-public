import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './components/chats/chats.component';
import { FindFriendComponent } from './components/find-friend/find-friend.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';
import { FriendRequestComponent } from './components/friend-request/friend-request.component';
import { FriendSentRequestComponent } from './components/friend-sent-request/friend-sent-request.component';

const routes: Routes = [
  { path: '', component: ChatsComponent },
  { path: 'find', component: FindFriendComponent },
  { path: 'friendList', component: FriendListComponent },
  { path: 'friendRequest', component: FriendRequestComponent },
  { path: 'friendSentRequest', component: FriendSentRequestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatsRoutingModule {}
