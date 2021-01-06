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
    Orders: {
        admin: false,
        link: '/orders',
        text: 'Orders',
    },
    OrderSuccess: {
        admin: true,
        link: 'order-success',
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

export default navLinks;
