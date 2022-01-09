var app = new Vue({
    el:'#app',
    data:{
        product: 'Shoes',
        image: './green-shoe.jfif',
        inStock: false,
        onSale: true,
        sizes: ["S", "M", "L"],
        variants: [
            {
                variantId: 1,
                variantColor: "green",
                variantImage: './green-shoe.jfif'
            },
            {
                variantId: 2,
                variantColor: "black",
                variantImage: './black-shoe.jfif'
            }
        ],
        cart: 0,
        styleObject: {
            color: 'red',
            fontSize: '18px',
            textDecoration: 'line-through'
        }
        
    },
    methods: {
        
        addToCart: function () {
            this.cart += 1
        },
        deleteItem: function () {
            this.cart -= 1
        },
        updateProduct: function (variantImage) {
            this.image = variantImage
        }
    }
})