const {makeCustomer, updateCustomer} = require('./index')

describe('adding a new customer', ()=>{

    it('customer must have a name', ()=>{

        const customer = {fullname: null, contact: "09081890778", address: "Brgy. Lagao"}
        expect(()=> makeCustomer(customer).toThrow("Please enter full"))
    })

    it('customer name must not contain invalid chars', ()=>{

        const customer = {fullname: "#@#&@*(#&*(#@&#@&#(*&", contact: "09081890778", address: "Brgy. Lagao"}
        expect(()=> makeCustomer(customer).toThrow("Invalid chars aren't allowed as name"))
    })

    it('contact information must not be blank', ()=>{

        const customer = {fullname: 'Janele Cabe', contact: ' ', address: "Brgy. Lagao"}
        expect(()=> makeCustomer(customer).toThrow("Please enter contact information"))
    })

    it('address must not be blank', ()=>{

        const customer = {fullname: 'Janele Cabe', contact: '09081890778', address: ""}
        expect(()=> makeCustomer(customer).toThrow("Please provide address"))
    })
})

describe('updating customer information', ()=>{
    it('must not update with blank name', ()=>{

        const customer = {fullname: null, contact: "09081890778", address: "Brgy. Lagao"}
        expect(()=> updateCustomer(customer).toThrow("Please enter full name"))
    })

    it('must not update name with special chars', ()=>{

        const customer = {fullname: "!@#$%^&*(", contact: "09081890778", address: "Brgy. Lagao"}
        expect(()=> updateCustomer(customer).toThrow("Invalid chars aren't allowed as name"))
    })

    it('must not update with blank contact information', ()=>{

        const customer = {fullname: 'Janele Cabe', contact: ' ', address: "Brgy. Lagao"}
        expect(()=> updateCustomer(customer).toThrow("Please enter contact information"))
    })

    it('must not update with blank address', ()=>{

        const customer = {fullname: 'Janele Cabe', contact: '09081890778', address: ""}
        expect(()=> updateCustomer(customer).toThrow("Please provide address"))
    })

    it("must not update if id isn't available", ()=>{

        const customer = {id: null,fullname: 'Janele Cabe', contact: '09081890778', address: ""}
        expect(()=> updateCustomer(customer).toThrow("Invalid customer id"))
    })
})