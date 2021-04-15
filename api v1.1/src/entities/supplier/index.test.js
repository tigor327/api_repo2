const { makeSupplier, updateSupplier } = require('.')

describe('Supplier creation', ()=>{
    
    it('must have a company name', ()=>{
        const supplier = {companyname: null, contact: "0908189078", address: "General Santos City"}
        expect(()=> makeSupplier(supplier).toThrow("Provide a company name"))
    })

    it('must have a contact detail', ()=>{
        const supplier = {companyname: null, contact: "", address: "General Santos City"}
        expect(()=> makeSupplier(supplier).toThrow("Provide a company name"))
    })

    it('must have an address', ()=>{
        const supplier = {companyname: null, contact: "0908189078", address: "General Santos City"}
        expect(()=> makeSupplier(supplier).toThrow("Provide a company name"))
    })
})

describe('Update supplier', ()=> {
    it('update must have an id', ()=>{
        const supplier = {id: null, companyname: "Easter Eggers Inc.", contact: "0908189078", address: "General Santos City"}
        expect(()=> makeSupplier(supplier).toThrow("Invalid company id"))
    })

    it('update must have a name', ()=>{
        const supplier = {id: 1, companyname: "", contact: "0908189078", address: "General Santos City"}
        expect(()=> makeSupplier(supplier).toThrow("Invalid company name"))
    })

    it('update must have a contact detail', ()=>{
        const supplier = {id: 1, companyname: "Eeaster Eggers Inc.", contact: "", address: "General Santos City"}
        expect(()=> makeSupplier(supplier).toThrow("Provide a  contact information"))
    })

    it('update must have an address', ()=>{
        const supplier = {id: 1, companyname: "Eeaster Eggers Inc.", contact: "0908189078", address: ""}
        expect(()=> makeSupplier(supplier).toThrow("Provide a company address"))
    })
})