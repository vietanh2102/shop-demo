import { createContext, useEffect, useState } from "react";
export const CartContext = createContext()

function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [itemAmount, setItemAmount] = useState(0)
    const [totalCost, setTotalCost] = useState(0)
    //total cost
    useEffect(() => {
        const cost = cart.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.quatity * currentValue.price
        }, 0)
        setTotalCost(cost)
    }, [cart])
    //xoa item khoi cart
    const removeItem = (id) => {
        const newCart = cart.filter(item => {
            return item.newId !== id
        })
        setCart(newCart)
    }
    //clear cart
    const clearCart = () => {
        setCart([])
    }
    // Giams so luong san pham
    const deIncreaseItem = (id) => {
        const cartItem = cart.find(item => {
            return item.newId === id
        })
        if (cartItem) {
            const newCart = cart.map(item => {
                if (item.newId === id) {
                    return { ...item, quatity: item.quatity - 1 }
                } else {
                    return item
                }
            })
            setCart(newCart)
        }
        if (cartItem.quatity < 2) {
            removeItem(id)
        }

    }
    //tang so luong san pham
    const increaseItem = (id) => {
        const cartItem = cart.find(item => item.newId === id)
        addItem(cartItem.id, cartItem, cartItem.size)
    }
    // them san pham vao cart
    const addItem = (id, products, sizeInput) => {
        const newProduct = { ...products, quatity: 1, size: sizeInput, newId: cart.length }
        console.log(newProduct);

        //kiểm tra item đã có trong cart chưa
        const cartItem = cart.find((item) => {
            return (
                item.id === id && item.size === sizeInput
            )
        }) // Trả về các item có cùng id vừa click

        //Nếu có item trong cart thì tăng quatity, nếu k có thì THÊM item vào cart
        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id && item.size === sizeInput) {
                    return { ...item, quatity: cartItem.quatity + 1 }
                } else {
                    return item
                }
            })
            setCart(newCart)
        } else {
            setCart([...cart, newProduct])
        }
    }
    // render quanity
    useEffect(() => {
        const amount = cart.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.quatity
        }, 0)
        setItemAmount(amount)
    }, [cart])

    return (
        <CartContext.Provider value={{
            addItem,
            cart,
            itemAmount,
            totalCost,
            increaseItem,
            clearCart,
            deIncreaseItem,
            removeItem,
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;