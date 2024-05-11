import { useEffect } from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";
import { FormInput, FormTextarea } from "../components";

// firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

// acation
export const action = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");
  let time = formData.get("time");
  let imgUrl = formData.get("imgUrl");
  let ingredients = formData.get("ingredients");
  let method = formData.get("method");

  const newFood = {
    title,
    time,
    imgUrl,
    ingredients,
    method,
  };

  await addDoc(collection(db, "foods"), newFood);

  console.log(newFood);
  return newFood;
};

function Create() {
  const navigate = useNavigate();
  const actionData = useActionData();
  useEffect(() => {
    if (actionData) navigate("/");
  }, [actionData]);

  return (
    <div className="align-content">
      <div className="text-center">
        <h1 className="text-3xl mb-3">Add New Recipe</h1>
        <div className="max-w-sm w-full mx-auto">
          <Form method="post">
            <FormInput
              label="Title:"
              placeholder="Enter your meal name"
              name="title"
            />
            <FormInput
              label="Cooking time:"
              placeholder="Enter preparation time of your meal"
              name="time"
            />
            <FormInput
              label="Ingredients:"
              placeholder="Enter ingredients of meal"
              name="ingredients"
            />
            <FormInput
              label="Image URL:"
              placeholder="Enter image URL"
              name="imgUrl"
            />
            <FormTextarea
              label="Method:"
              placeholder="Ener method of mail"
              name="method"
            />
            <button className="btn btn-primary mt-3 w-full">Add Recipe</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Create;
