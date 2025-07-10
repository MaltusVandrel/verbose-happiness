import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';
import { Role } from './role.enum';
import { IS_PUBLIC_KEY } from './public.decorator';

/**
 * Para um endpoint @public nao irá surtir efeito, pois este pula o funcionamento do guard
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    //user é adicionado no auth.guard
    const { user } = context.switchToHttp().getRequest();
    if (user) {
      return requiredRoles.some((role) => user.roles?.includes(role));
    } else {
      return false;
    }
  }
}
