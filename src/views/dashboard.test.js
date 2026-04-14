const { getDashboardData } = require('./dashboard');
test('returns widgets for valid user', () => {
  const data = getDashboardData('user123');
  expect(data.widgets).toHaveLength(3);
});