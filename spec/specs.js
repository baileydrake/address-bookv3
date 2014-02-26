beforeEach(function() {
  Contact.all = [];
});

describe("Contact", function () {
  describe("create", function() {
    it("creates a new instance of a Contact", function() {
      var testContact = Contact.create();
      Contact.isPrototypeOf(testContact).should.equal(true);
    });
    it("initializes the contact", function() {
      var testContact = Contact.create("Mary", "Jane");
      testContact.addresses.should.eql([]);
    });
    it("adds the contact to the .all property", function() {
      var testContact = Contact.create();
      Contact.all.should.eql([testContact]);
    });
  });

  describe("initialize", function() {
    it("sets the first and last name", function() {
      var testContact = Object.create(Contact);
      testContact.initialize("Mary", "Jane");
      testContact.firstName.should.equal("Mary");
      testContact.lastName.should.equal("Jane");
    });
  });  

    it("sets up an empty array for the address property", function() {
      var testContact = Object.create(Contact);
      testContact.initialize("Mary", "Jane");
      testContact.addresses.should.eql([]);
    });

    it("combines the first and last name, separate by a space", function() {
      var testContact = Object.create(Contact);
      testContact.initialize("Mary", "Jane");
      testContact.fullName.should.equal("Mary Jane");
    });
 
  describe("createAddress", function() {
    it("creates an address object", function() {
      var testContact = Contact.create();
      var testAddress = testContact.createAddress();
      Address.isPrototypeOf(testAddress).should.equal(true);
    });

    it("adds the address to the addresses property of the contact", function() {
      var testContact = Contact.create();
      var testAddress = testContact.createAddress();
      testContact.addresses.should.eql([testAddress]);
    });
  });
});

describe("Address", function() {
  describe("create", function(){
    it("creates a new instance of Address", function(){
     var testAddress = Address.create();
      Address.isPrototypeOf(testAddress).should.equal(true); 
    });
        it("initializes the contact", function() {
      var testContact = Contact.create("Mary", "Jane");
      testContact.addresses.should.eql([]);
    });
  });

  describe("initialize", function() {
    it("sets the street, city, and state", function(){
      var testAddress = Object.create(Address);
      testAddress.initialize("345 5th Ave", "Denver", "Colorado");
      testAddress.street.should.equal("345 5th Ave");
      testAddress.city.should.equal("Denver");
      testAddress.state.should.equal("Colorado");
    });

    it("returns the full address with nice formatting", function() {
      var testAddress = Object.create(Address);
      testAddress.initialize("345 5th Ave", "Denver", "Colorado");
      testAddress.fullAddress.should.equal("345 5th Ave, Denver, Colorado");
    });
  });
});
