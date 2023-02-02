import { initializeTimes, updateTimes, fetchAPI } from './App.js';

test("initializeTimes, return the correct expected value", () => {
  const times = initializeTimes();
  expect(times).toEqual({ times: [...fetchAPI(new Date())] });
});

test("updateTimes, return the same value that is provided in the state", () => {
  const state = { times: [...fetchAPI(new Date())] };
  const action = { setBookingDate: new Date() };
  const newState = updateTimes(state, action);
  expect(newState).toEqual({ times: [...fetchAPI(new Date())] });
});