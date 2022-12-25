import { reactive } from 'vue'

const Cart = reactive({
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHanlder,
    removeItem: removeItemFromCart
})

function addItemToCartHanlder(item) {
    const updatedTotalAmount = this.totalAmount + (item.price * item.amount)

    const existingCartItemIndex = this.items.findIndex(cart => cart.id === item.id)
    const existingCartItem = this.items[existingCartItemIndex]
    let updatedItems = []

    if (existingCartItem) {
        const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + item.amount
        }
        updatedItems = [...this.items]
        updatedItems[existingCartItemIndex] = updatedItem
    } else {
        updatedItems = this.items.concat(item)
    }

    this.items = updatedItems
    this.totalAmount = updatedTotalAmount
}

function removeItemFromCart(id) {
    const existingCartItemIndex = this.items.findIndex(cart => cart.id === id)
    const existingCartItem = this.items[existingCartItemIndex]

    const updatedTotalAmount = parseFloat(this.totalAmount) - parseFloat(existingCartItem.price)
    let updatedItems = []

    if (existingCartItem.amount === 1) {
        updatedItems = this.items.filter(cart => cart.id !== id)
    } else {
        const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 }
        updatedItems = [...this.items]
        updatedItems[existingCartItemIndex] = updatedItem
    }

    this.items = updatedItems
    this.totalAmount = updatedTotalAmount < 0 ? 0 : updatedTotalAmount
}

export default Cart