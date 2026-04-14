// Módulo de autenticación
function login(user, password) {
  if (!user || !password) throw new Error("Credenciales requeridas");
  return { token: "jwt_token_" + user, expiresIn: 3600 };
}
module.exports = { login };