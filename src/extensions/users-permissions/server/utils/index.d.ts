import * as usersPermissions from '@strapi/plugin-users-permissions/server/services/users-permissions';
import * as user from '@strapi/plugin-users-permissions/server/services/user';
import * as role from '@strapi/plugin-users-permissions/server/services/role';
import * as jwt from '@strapi/plugin-users-permissions/server/services/jwt';
import * as providers from '../services/providers';

type S = {
  ['users-permissions']: typeof usersPermissions;
  ['role']: typeof role;
  user: typeof user;
  jwt: typeof jwt;
  providers: typeof providers;
  ['providers-registry']: typeof providers;
};

export function getService<T extends keyof S>(name: T): ReturnType<S[T]>;
