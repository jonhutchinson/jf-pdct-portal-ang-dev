const ROLE_KEY = 'roles';

export function getRoles(): string[] {
  return JSON.parse(localStorage.getItem(ROLE_KEY) || '[]');
}

export function setRoles(roles: string[]) {
  localStorage.setItem(ROLE_KEY, JSON.stringify(roles));
}
