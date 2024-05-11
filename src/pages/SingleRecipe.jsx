import { useCollection } from "../hooks/useCollection";
import { FaBookmark } from "react-icons/fa";

const SingleRecipe = () => {
  const { data } = useCollection();
  return (
    <ul className="flex flex-col align-content gap-3">
      {data &&
        data.map((food) => (
          <li
            className="max-h group flex p-6 gap-9 hover:shadow-2xl hover:rounded-2xl relative "
            key={food.id}
          >
            <img
              className="max-w-xl w-full rounded-r-lg"
              src={food.imgUrl}
              alt={food.title}
            />

            <div className="py-6">
              <div className="flex flex-col text-left mb-11">
                <span className=" flex items-center gap-2 mr-auto mb-6">
                  <span className="text-xl mt-2">
                    The name of this famous dish :
                  </span>{" "}
                  <span className="text-4xl  font-black"> {food.title}</span>
                </span>
                <p className="text-xl font-normal mb-1">
                  Cooking time -{" "}
                  <span className="font-medium">{food.time} minutes</span>
                </p>
                <p className="text-xl font-normal mb-4">
                  Ingredients:{" "}
                  <span className="font-medium ">
                    {food.ingredients.map((ingredient, index) => (
                      <span className="mr-1" key={index}>
                        {ingredient},
                      </span>
                    ))}
                  </span>
                </p>
                <p className="text-xl font-normal mb-4">
                  Method :
                   <span className="font-medium ml-2">{food.method}</span>
                </p>
                <p className="text-xl w-2/3 line-clamp-4">{food.desc}</p>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default SingleRecipe;
