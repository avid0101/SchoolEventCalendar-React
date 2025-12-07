export function handleLogout() {
  localStorage.clear();
  window.location.href = '/login';
}
