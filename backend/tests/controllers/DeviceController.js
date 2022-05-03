// const { createResponseContent, createResponseErrors } = require('../../src/controllers/DeviceController')
// const supertest = require('supertest')
// const app = require('../../src/app')
//
//
// describe('Endpoints de devices', () => {
//    it('POST - /devices', async () => {
//         const response = await supertest(app)
//         .post('/devices')
//         .send({
//             name: 'motoG',
//             categoryId: 1,
//             color: "red",
//             partNumber: 2
//         })
//
//         expect(response.statusCode).toEqual(200)
//         expect(response.body).toHaveProperty('content.name', 'motoG')
//         expect(response.body).toHaveProperty('content.categoryId', 1)
//         expect(response.body).toHaveProperty('content.color', 'red')
//         expect(response.body).toHaveProperty('content.partNumber', 2)
//
//     })
// })
