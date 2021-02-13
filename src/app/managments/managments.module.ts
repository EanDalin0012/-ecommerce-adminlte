import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users/users.component';
import {UserAddComponent} from './user-add/user-add.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {UserAccountsComponent} from './user-accounts/user-accounts.component';
import {UserAccountAddComponent} from './user-account-add/user-account-add.component';
import {UserAccountEditComponent} from './user-account-edit/user-account-edit.component';
import {RolesComponent} from './roles/roles.component';
import {RoleAddComponent} from './role-add/role-add.component';
import {RoleEditComponent} from './role-edit/role-edit.component';
import {AssignRoleComponent} from './assign-role/assign-role.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {ManagmentComponent} from './managment/managment.component';


@NgModule({
  declarations: [UsersComponent, UserAddComponent, UserEditComponent, UserAccountsComponent, UserAccountAddComponent, UserAccountEditComponent, RolesComponent, RoleAddComponent, RoleEditComponent, AssignRoleComponent, UserDetailsComponent, ManagmentComponent],
  imports: [
    CommonModule
  ]
})
export class ManagementsModule {
}
