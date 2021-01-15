const navLinks = {
    Home: {
        admin: false,
        link: '/',
        menu: true,
        text: 'Home',
    },
    AdminOrders: {
        admin: true,
        link: '/admin-orders',
        menu: false,
        text: 'Admin Orders',
    },
    AdminProducts: {
        admin: true,
        link: '/admin-products',
        menu: false,
        text: 'Admin Products',
    },
    CheckOut: {
        admin: false,
        link: '/checkout',
        menu: false,
        text: 'Checkout',
    },
    Logout: {
        admin: true,
        link: '/logout',
        menu: false,
        text: 'Log Out',
    },
    NewProduct: {
        admin: false,
        link: '/admin-products/new',
        menu: false,
        text: 'New Product',
    },
    Orders: {
        admin: false,
        link: '/orders',
        menu: false,
        text: 'Orders',
    },
    OrderSuccess: {
        admin: false,
        link: '/order-success',
        menu: false,
        text: 'Order Success',
    },
    Products: {
        admin: false,
        link: '/products',
        menu: false,
        text: 'Products'
    },
    ShoppingCart: {
        admin: false,
        link: '/shopping-cart',
        menu: true,
        text: 'Shopping Cart'
    },
}

const formFields = [
    {
        login: true,
        register: true,
        addProduct: false,
        type: "text",
        name: "username",
        placeholder: "Username"
    },{
        login: true,
        register: true,
        addProduct: false,
        type: "password",
        name: "password",
        placeholder: "Password"
    },{
        login: false,
        register: true,
        addProduct: false,
        type: "text",
        name: "firstName",
        placeholder: "First Name"
    },{
        login: false,
        register: true,
        addProduct: false,
        type: "text",
        name: "lastName",
        placeholder: "Last Name"
    },{
        login: false,
        register: false,
        addProduct: true,
        type: "text",
        text: "Title",
        name: "title",
        placeholder: "title"
    },{
        login: false,
        register: false,
        addProduct: true,
        type: "text",
        text: "Price",
        name: "price",
        placeholder: "price"
    },{
        login: false,
        register: false,
        addProduct: true,
        type: "text",
        text: "Category",
        name: "category",
        placeholder: "category"
    },{
        login: false,
        register: false,
        addProduct: true,
        type: "text",
        text: "Image URL",
        name: "imageURL",
        placeholder: "image url"
    },
]

const productCategories = [
    {
        name: 'Bread',
        id: 'bread',
    },{
        name: 'Vegetables',
        id: 'vegetables',
    },{
        name: 'Fruits',
        id: 'fruits',
    },{
        name: 'Dairy',
        id: 'dairy',
    }
]

export { navLinks, formFields, productCategories };
