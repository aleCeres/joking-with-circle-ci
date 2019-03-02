const sinon = require('sinon')
const main = require('../../src/main')
const httpClient = require('../../src/httpClient')

describe('main', () => {
    test('should call client module', async () => {
        const httpClientStub = sinon.stub(httpClient, 'makeCall').returns({data: 'responseData'})

        await main(httpClient)

        expect(httpClientStub.calledOnce).toBe(true)
    })
});
