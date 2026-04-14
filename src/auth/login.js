// Módulo de autenticación - fix: null crash en userId undefined
function login(user, password) {
  if (user == null || password == null) {
    throw new Error("Credenciales no pueden ser nulas");
  }
  if (!user.trim() || !password.trim()) {
    throw new Error("Credenciales requeridas");
  }
  return { token: "jwt_token_" + user, expiresIn: 3600 };
}
module.exports = { login };