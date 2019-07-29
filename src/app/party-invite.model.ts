export class PartyInviteModel {
  name: string = '';
  canAttend: boolean = true;
  totalGuest: number = 1;
  guestItems: Array<string> = [];
  allergies: string = '';
  email: string = '';
}
