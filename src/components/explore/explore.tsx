

export function Explore(){
    return(
        <div>
  <div className="text-6xl font-bold text-center">
    <h2>
      Explore How Our Recipe <br /> Wonderland Works!
    </h2>
  </div>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 rounded-xl">
    <div className="flex flex-col gap-3 md:gap-8">
      <div>
        <img
          src="/order.jpg"
          alt="Find Recipes"
          className="w-full h-64 object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-y-4">
        <span className="text-green-500 font-bold">01</span>
        <span className="font-bold">Find Recipes</span>
        <p className="text-gray-500 dark:text-white">
          Choose from a wide variety of recipes for all
          <br />
          preferences and diets.
        </p>
      </div>
    </div>

    <div className="flex flex-col mt-16 gap-3 md:gap-8 ">
        <div className="flex flex-col gap-y-4">
        <span className="text-green-500 font-bold">02</span>
        <span className="font-bold">Order Ingredients</span>
        <p className="text-gray-500 dark:text-white">
          Partners supermarkets supply all the ingredients
          <br />
          for the chosen recipes at no extra charge.
        </p>
      </div>
      <div>
        <img
          src="/delivery.jpg"
          alt="Order Ingredients"
          className="w-full h-64 object-cover rounded-xl"
        />
      </div>
      
    </div>

    <div className="flex flex-col gap-3 md:gap-8">
      <div>
        <img
          src="/enjoyment.jpg"
          alt="Cooking and Enjoyment"
          className="w-full h-64 object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-y-4">
        <span className="text-green-500 font-bold">03</span>
        <span className="font-bold">Cooking and Enjoyment</span>
        <p className="text-gray-500 dark:text-white">
          Recreate simple recipes with step-by-step
          <br />
          instructions.
        </p>
      </div>
    </div>
  </div>
</div>

        
    );
}