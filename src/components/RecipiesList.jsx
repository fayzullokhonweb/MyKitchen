import { MdAccessTimeFilled } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";

import { useCollection } from "../hooks/useCollection";
const FoodList = () => {
  const { data } = useCollection();
  return (
    <div className="align-content">
      <h1 className="text-center text-5xl mb-11 mt-8">
        Let's see what to eat in Uzbekistan
      </h1>
      <ul className="grid grid-cols-3 gap-5">
        {data &&
          data.map((food) => (
            <li key={food.id}>
              <div className="card w-96 bg-base-100 shadow-md hover:shadow-2xl group relative hover:-translate-y-0.5">
                <figure className="px-10 pt-10 ">
                  <img
                    src={food.imgUrl}
                    alt="Shoes"
                    className="rounded-xl w-96 h-48"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <div>
                    <span>The name of the dish</span>
                    <h2 className=" font-serif  font-semibold text-3xl">
                      {food.title}
                    </h2>
                  </div>
                  <div className="line-clamp-2 flex items-center gap-2 text-center mb-2">
                    <span>
                      <MdAccessTimeFilled className="w-6 h-6" />
                    </span>
                    <span>Cooking time: {food.time} minutes</span>
                  </div>
                  <p className="line-clamp-2 text-center mb-2">{food.method}</p>
                  <div className="card-actions">
                    <Link
                      to={`/recipe/${food.id}`}
                      className="text-xl font-serif  btn btn-primary btn-outline "
                    >
                      <span className="flex items-center gap-1">
                        <span> More Details</span>{" "}
                        <span>
                          <CiLogin className="w-7 h-7" />
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FoodList;
