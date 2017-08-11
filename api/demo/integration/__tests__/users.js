import startServer from '../start-server'
import axios from 'axios'

let server

beforeAll(async() => {
  server = await startServer()
})

afterAll(done => {
  server.close(done)
})

test('can get users', async() => {
  const response = await axios.get('http://localhost:3001/api/users')
  const user = response.data.users[0]
  expect(user).toMatchObject({
    name: expect.any(String),
    username: expect.any(String),
  })
})

test('can get 2 users at offset 3', async() => {
  const fiveUsersPromise = axios.get('http://localhost:3001/api/users?limit=5')
    .then(response => response.data.users)
  const twoUsersPromise = axios.get('http://localhost:3001/api/users?limit=2&offset=3')
    .then(response => response.data.users)

  const [fiveUsers, twoUsers] = await Promise.all([fiveUsersPromise, twoUsersPromise])
  const [firstUser, secondUser] = twoUsers
  const [, , , firstUserAll, secondUserAll] = fiveUsers
  expect(firstUser).toEqual(firstUserAll)
  expect(secondUser).toEqual(secondUserAll)
})

// test('can get 2 users at offset 3', () => {
//   const fiveUsersPromise = axios.get('http://localhost:3001/api/users?limit=5')
//     .then(response => response.data.users)
//   const twoUsersPromise = axios.get('http://localhost:3001/api/users?limit=2&offset=3')
//     .then(response => response.data.users)
//   return Promise.all([fiveUsersPromise, twoUsersPromise])
//     .then(responses => {
//       const [fiveUsers, twoUsers] = responses
//       const [firstUser, secondUser] = twoUsers
//       const [, , , firstUserAll, secondUserAll] = fiveUsers
//       expect(firstUser).toEqual(firstUserAll)
//       expect(secondUser).toEqual(secondUserAll)
//     })
// })