
const CartWidget = () => {
    return (
        <div className="cart-widget flex items-center">
            <ion-icon name="bag-handle-outline"></ion-icon>
            <span className="cart-item-count bg-red-500 text-white rounded-full px-2 py-1">3</span>
        </div>
    );
};

export default CartWidget;