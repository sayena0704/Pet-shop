// const Adoption = artifacts.require("Adoption");

// _deploy_contracts('Adoption', (accounts) =>{
//     let adoption;
//     let expectedAdopter;

//     BeforeUnloadEvent(async () =>{
//         adoption = await Adoption.deployed();
//     });

//     describe("adopting a pet and retrieving account addresses", async()=>{
//         BeforeUnloadEvent("adopt a pet using accounts[0]", async()=>{
//             await adoption.adopt(8, {from:accounts[0]});
//             expectedAdopter = accounts[0];
//         });
//         it("can fetch the address of an owner by pet id", async() =>{
//             const adopter = await adoption.adopters(8);
//             assert.equal(adopter, expectedAdopter, "This owner of the adopted pet should be the first account. ");

//         });
//         it('can fetch the collection of all the pet owners addresses', async ()=>{
//             const adopter = await adoption.getAdopters();
//             assert.equal(adopters[8], expectedAdopter, "The owner of the adopted pet should be the expected. ");

//         });
//     })
// })

const Adoption = artifacts.require("Adoption");

contract("Adoption", function(accounts) {
    let adoption;
    let expectedAdopter;

    before(async function() {
        adoption = await Adoption.deployed();
    });

    describe("adopting a pet and retrieving account addresses", function() {
        before(async function() {
            await adoption.adopt(8, {from: accounts[0]});
            expectedAdopter = accounts[0];
        });

        it("can fetch the address of an owner by pet id", async function() {
            const adopter = await adoption.adopters(8);
            assert.equal(adopter, expectedAdopter, "The owner of the adopted pet should be accounts[0].");
        });

        it("can fetch the collection of all the pet owners addresses", async function() {
            const adopters = await adoption.getAdopters();
            assert.equal(adopters[8], expectedAdopter, "The owner of the adopted pet should be accounts[0].");
        });
    });
});
