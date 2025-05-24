const MenuPage: React.FC = () => {
  return (
    <div className="bg-background">
      {/* Menu Header */}
      <div className="bg-yel  py-12 text-center">
        <h1 className=" text-[7.5rem] font-bold uppercase text-primary">Menu</h1>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Lucknowi Biryani Section */}
        <section className="mb-16">
          <h2 className="mb-8 border-b border-gray-300 pb-4 text-3xl font-bold uppercase text-secondary">
            Lucknowi Biryani
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Item 1 */}
            <div>
              <h3 className="text-xl font-bold text-secondary">Kesari Dumpukht Biryani</h3>
              <div className="mt-2 flex justify-between">
                <p>Serve 1</p>
                <p className="font-medium">₹389</p>
              </div>
              <div className="mt-1 flex justify-between">
                <p>serve 2</p>
                <p className="font-medium">₹649</p>
              </div>
            </div>

            {/* Item 2 */}
            <div>
              <h3 className="text-xl font-bold text-secondary">Mutton Dumpukht Biryani</h3>
              <div className="mt-2 flex justify-between">
                <p>Serve 1</p>
                <p className="font-medium">₹449</p>
              </div>
              <div className="mt-1 flex justify-between">
                <p>serve 2</p>
                <p className="font-medium">₹679</p>
              </div>
            </div>

            {/* Item 3 */}
            <div>
              <h3 className="text-xl font-bold text-secondary">Vegetable Dumpukht Biryani</h3>
              <div className="mt-2 flex justify-between">
                <p>Serve 1</p>
                <p className="font-medium">₹349</p>
              </div>
              <div className="mt-1 flex justify-between">
                <p>serve 2</p>
                <p className="font-medium">₹599</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hyderabadi Biryani Section */}
        <section className="mb-16">
          <h2 className="mb-8 border-b border-gray-300 pb-4 text-3xl font-bold uppercase text-secondary">
            Hyderabadi Biryani
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Item 1 */}
            <div>
              <h3 className="text-xl font-bold text-secondary">Kathal Biryani</h3>
              <div className="mt-2 flex justify-between">
                <p>Serve 1</p>
                <p className="font-medium">₹369</p>
              </div>
              <div className="mt-1 flex justify-between">
                <p>serve 2</p>
                <p className="font-medium">₹629</p>
              </div>
            </div>

            {/* Item 2 */}
            <div>
              <h3 className="text-xl font-bold text-secondary">Chicken Biryani</h3>
              <div className="mt-2 flex justify-between">
                <p>Serve 1</p>
                <p className="font-medium">₹389</p>
              </div>
              <div className="mt-1 flex justify-between">
                <p>serve 2</p>
                <p className="font-medium">₹649</p>
              </div>
            </div>
          </div>
        </section>

        {/* Muradabadi Biryani Section */}
        <section>
          <h2 className="mb-8 border-b border-gray-300 pb-4 text-3xl font-bold uppercase text-secondary">
            Muradabadi Biryani
          </h2>
          <div className="rounded border border-gray-300 p-8 text-center">
            <p className="text-xl font-bold">The are no items to show here yet</p>
            <p className="mt-2">Come back soon to see what we have to offer</p>
          </div>
        </section>
      </div>
    </div>
    
    



  );
};

export default MenuPage;
