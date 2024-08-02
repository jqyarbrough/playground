function getBookingById(bookingId) {
  return cy.request('GET', `https://restful-booker.herokuapp.com/booking/${bookingId}`);
}
describe("Custom Functions for API Testing with Cypress", () => {
it("Retrieves booking details for a specific ID", () => {
  const bookingId = 403; // Define the booking ID to be used in the test
  getBookingById(bookingId).then((response) => {
    expect(response.status).to.eq(200);
    console.log(response.body);
  });
});
});
