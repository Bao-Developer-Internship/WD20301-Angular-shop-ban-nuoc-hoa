import { Component } from '@angular/core';
import { AdminSidebar } from '../admin-sidebar/admin-sidebar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-settings',
  imports: [AdminSidebar, FormsModule],
  templateUrl: './admin-settings.html',
})
export class AdminSettings {
  shopName = 'LUXE SCENT';
  email = 'admin@luxescent.com';
  phone = '0901234567';
  address = 'Hà Nội, Việt Nam';
}
