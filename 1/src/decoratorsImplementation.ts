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

function EntityDonoter(type: any) {
    return function (target: any) {
        console.log("This is ", `${type}`);
    }
}

function Input(customerId: number) {
    return function (target: any, key: string) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => customerId
        });
    }
}


@EntityDonoter('Entity')
@CustomerInformation({ customerType: 'New Customer' })
class Customer {

    @Input(1)
    customerId: number;
    constructor(private name: string, private age: number){}

    @CustomerLogger 
    getCustomerDetails() {
        return `${this.name} ${this.age}`;
    }

}

const customer = new Customer('Ujjwal', 28) as any;

console.log(customer.getCustomerDetails());

console.log(`Id: ${customer.customerId}`);
console.log(`Name: ${customer.name}`);
console.log(`Age: ${customer.age}`);
console.log(`Type: ${customer.customerInformation.customerType}`);
