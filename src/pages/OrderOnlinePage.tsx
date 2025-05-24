import { useState } from 'react';

type OrderMethod = 'pickup' | 'delivery';

const OrderOnlinePage: React.FC = () => {
  const [orderMethod, setOrderMethod] = useState<OrderMethod>('pickup');

  return (
    <div className="bg-background">
      {/* Order Header */}
      <div className="bg-yellow py-12 text-center">
        <h1 className="animate-slide-up text-5xl font-bold uppercase text-primary">Order Online</h1>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Order Status */}
        <div className="mb-6 flex items-center">
          <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
          <p>Accepting Orders</p>
        </div>

        {/* Order Method Tabs */}
        <div className="mb-8 flex">
          <button
            className={`flex-1 py-3 text-center font-semibold transition-colors ${
              orderMethod === 'pickup'
                ? 'bg-primary text-white'
                : 'bg-yellow hover:bg-light-orange'
            }`}
            onClick={() => setOrderMethod('pickup')}
          >
            Pickup
          </button>
          <button
            className={`flex-1 py-3 text-center font-semibold transition-colors ${
              orderMethod === 'delivery'
                ? 'bg-primary text-white'
                : 'bg-yellow hover:bg-light-orange'
            }`}
            onClick={() => setOrderMethod('delivery')}
          >
            Delivery
          </button>
        </div>

        {/* Order Details */}
        <div className="mb-8">
          {orderMethod === 'pickup' ? (
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" fill="currentColor" className="mr-2 h-5 w-5">
                <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
              </svg>
              <p>Pickup time: Up to 30 minutes <span className="text-primary">Change</span></p>
            </div>
          ) : (
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" fill="currentColor" className="mr-2 h-5 w-5">
                <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
              </svg>
              <p>Delivery Address: 500 Terry Francine Street, San Francisco, CA 94158</p>
            </div>
          )}
        </div>

        {/* Menu Categories */}
        <div className="mb-6 border-b border-gray-300">
          <ul className="flex space-x-6">
            <li className="border-b-2 border-primary pb-2 font-medium text-primary">
              LUCKNOWI BIRYANI
            </li>
            <li className="pb-2 font-medium text-secondary hover:text-primary">
              HYDERABADI BIRYANI
            </li>
            <li className="pb-2 font-medium text-secondary hover:text-primary">
              MURADABADI BIRYANI
            </li>
          </ul>
        </div>

        {/* Menu Title */}
        <h2 className="mb-8 text-3xl font-bold uppercase text-secondary">Menu</h2>

        {/* Menu Items - Lucknowi Biryani */}
        <div className="mb-8">
          <h3 className="mb-6 text-2xl font-bold uppercase text-secondary">
            Lucknowi Biryani
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Item 1 */}
            <div className="flex overflow-hidden rounded border border-primary">
              <div className="w-1/3 bg-tan">
                {/* Placeholder for item image */}
              </div>
              <div className="w-2/3 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="font-semibold">Kesari Dumpukht Biryani</h4>
                  <div className="flex">
                    <button className="h-6 w-6 rounded-full border border-gray-300 text-gray-500">-</button>
                    <span className="mx-2">0</span>
                    <button className="h-6 w-6 rounded-full border border-gray-300 bg-primary text-white">+</button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex">
                    {/* Star rating placeholders */}
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 text-primary"
                      >
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-bold">₹389.00</p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex overflow-hidden rounded border border-primary">
              <div className="w-1/3 bg-tan">
                {/* Placeholder for item image */}
              </div>
              <div className="w-2/3 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="font-semibold">Mutton Dumpukht Biryani</h4>
                  <div className="flex">
                    <button className="h-6 w-6 rounded-full border border-gray-300 text-gray-500">-</button>
                    <span className="mx-2">0</span>
                    <button className="h-6 w-6 rounded-full border border-gray-300 bg-primary text-white">+</button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex">
                    {/* Star rating placeholders */}
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 text-primary"
                      >
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-bold">₹449.00</p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex overflow-hidden rounded border border-primary">
              <div className="w-1/3 bg-tan">
                {/* Placeholder for item image */}
              </div>
              <div className="w-2/3 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="font-semibold">Vegetable Dumpukht Biryani</h4>
                  <div className="flex">
                    <button className="h-6 w-6 rounded-full border border-gray-300 text-gray-500">-</button>
                    <span className="mx-2">0</span>
                    <button className="h-6 w-6 rounded-full border border-gray-300 bg-primary text-white">+</button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex">
                    {/* Star rating placeholders */}
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 text-primary"
                      >
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-bold">₹349.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary - Fixed at bottom */}
        <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-up md:static md:mt-8 md:w-auto md:shadow-none">
          <div className="flex items-center justify-between">
            <p className="font-medium">Ready to order?</p>
            <button className="order-button">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOnlinePage;
