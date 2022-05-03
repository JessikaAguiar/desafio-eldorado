const { createResponseContent, createResponseErrors } = require('../../src/controllers/LoginController')
const supertest = require('supertest')
const app = require('../../src/app')

describe('Endpoints de auth', () => {
    it('POST - /login', async () => {
        const response = await supertest(app).post('/login').send({
            name: 'admin',
            password: '1234'
        })
        expect(response.statusCode).toEqual(200)
        expect(response.body).toHaveProperty('content.token')
        expect(response.body).toHaveProperty('content.info.name', 'admin')
    })
})
