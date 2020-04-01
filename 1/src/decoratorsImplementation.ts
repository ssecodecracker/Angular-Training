function CustomerLogger(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("-- target --");
    console.log(target);
    console.log("-- proertyKey --");
    console.log(propertyKey);
    console.log("-- descriptor --");
    console.log(descriptor);
}

function CustomerInformation(customerInformation: any) {
    return function (target: any) {
        Object.defineProperty(target.prototype, 'customerInformation', { value: customerInformation })
    }
}

function EntityDonoter(config: any) {
    return function (target: any) {
        console.log("This is ", `${config.type}`);
    }
}

@EntityDonoter({ type: 'Entity'})
@CustomerInformation({ customerType: 'New Customer' })
class Customer {
    constructor(private name: string, private age: number){}

    @CustomerLogger 
    getCustomerDetails() {
        return `${this.name} ${this.age}`;
    }

}

const customer = new Customer('Ujjwal', 28) as any;

console.log(customer.getCustomerDetails());
console.log(`${customer.name} ${customer.firstName} is ${customer.customerInformation.customerType}`);
