'use strict';
const {app} = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);

describe('my API Server', ()=> {

    test('handles not found request', async () => {
        // test for bad rout 
        const response = await request.get('/demo'); 
        expect(response.status).toEqual(404);
    });

    test('handles not found request', async () => {
        // test for bad methode
        const response = await request.post('/person'); 
        expect(response.status).toEqual(404);});
    });
    