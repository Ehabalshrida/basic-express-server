const {app} = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);

describe(' validator test',()=>{

    test('test no name in the query string', async () => {
       const response = await request.get('/person'); 
       expect(response.status).toEqual(500);
   });

    it('get name from /person ', async () => {
       const response = await request.get('/person?name=ali'); 
       expect(response.status).toEqual(200);
       expect(typeof response.body).toEqual('object');  
   });
})