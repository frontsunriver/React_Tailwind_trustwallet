import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative bg-blue-500 h-full">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div> */}

      <div className="relative max-w-6xl">
        <div className="py-12 h-full">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mt-10">
            {/* <h2 className="h2 mb-4 text-gray-200">The most trusted &</h2>
            <h2 className="h2 mb-4 text-gray-200">secure crypto wallet</h2>
            <p className="text-sm text-gray-400">Bye, store collect NFTs, exchange & earn</p>
            <p className="text-sm text-gray-400">crypto. Join 25 million+ people using Trust</p>
            <p className="text-sm text-gray-400">Wallet</p> */}
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none ">

            

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
