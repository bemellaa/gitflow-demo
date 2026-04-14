// Vista principal del dashboard
function getDashboardData(userId) {
  return {
    userId,
    widgets: ["stats", "recent-activity", "notifications"],
    lastLogin: new Date().toISOString()
  };
}
module.exports = { getDashboardData };