const navLinks = {
    AdminOrders: {
        admin: true,
        link: '/admin-orders',
        text: 'Admin Orders',
    },
    AdminProducts: {
        admin: true,
        link: '/admin-products',
        text: 'Admin Products',
    },
    CheckOut: {
        admin: false,
        link: '/checkout',
        text: 'Check Out',
    },
    Home: {
        admin: false,
        link: '/',
        text: 'Home',
    },
    Logout: {
        admin: false,
        link: '/logout',
        text: 'Log Out',
    },
    Orders: {
        admin: false,
        link: '/orders',
        text: 'Orders',
    },
    OrderSuccess: {
        admin: true,
        link: '/order-success',
        text: 'Order Success',
    },
    Products: {
        admin: false,
        link: '/products',
        text: 'Products'
    },
    ShoppingCart: {
        admin: false,
        link: '/shopping-cart',
        text: 'Shopping Cart'
    },
}

const formFields = [
    {
        login: true,
        register: true,
        type: "text",
        name: "username",
        placeholder: "Username"
    },{
        login: true,
        register: true,
        type: "password",
        name: "password",
        placeholder: "Password"
    },{
        login: false,
        register: true,
        type: "text",
        name: "firstName",
        placeholder: "First Name"
    },{
        login: false,
        register: true,
        type: "text",
        name: "lastName",
        placeholder: "Last Name"
    },
]

export { navLinks, formFields };
