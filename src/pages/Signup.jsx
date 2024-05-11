import React from "react";
import { Form, Link, useActionData } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useSignup } from "../hooks/useSignup";
import { useEffect } from "react";
import FormInput from "../components/FormInput";

// context

export const action = async ({ request }) => {
  let formData = await request.formData();
  let name = formData.get("displayName");
  let email = formData.get("email");
  let image = formData.get("image");
  let password = formData.get("password");

  return { name, email, image, password };
};

function Signup() {
  const { signUpWithGoogle, registerWithEmailAndPassword } = useSignup();

  const actionData = useActionData();

  useEffect(() => {
    if (actionData) {
      registerWithEmailAndPassword(actionData);
    }
  }, [actionData]);

  return (
    <div className="min-h-screen flex items-center justify-center gap-16">
      <div className="w-96 shadow-md hover:shadow-2xl p-7 rounded-md">
        <div className="mb-3 ">
          <Form method="POST" className="w-full">
            <h1 className="text-4xl text-center font-medium mb-3">SignUp</h1>
            <FormInput placeholder="User Name" type="text" name="displayName" />
            <FormInput placeholder="Email" type="email" name="email" />
            <FormInput placeholder="Photo Url" type="url" name="image" />
            <FormInput
              className="mb-4"
              placeholder="Password"
              type="password"
              name="password"
            />
            <button
              onClick={registerWithEmailAndPassword}
              type="submit"
              className="btn btn-primary w-full mt-3 text-base"
            >
              Signup
            </button>

            <div className="mb-4">
              <p className="mt-1 text-center text-base w-full ">
                Already have an account?
                <Link
                  to="/login"
                  className="link link-primary ml-1 no-underline hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
            <div className="w-full flex items-center">
              <div className="w-2/5 bg-black h-px opacity-25"></div>
              <div className="px-5">
                <p className="text-lg -mt-1 opacity-75">Or</p>
              </div>
              <div className="w-2/5 bg-black h-px opacity-25"></div>
            </div>
          </Form>
        </div>
        <div>
          <button
            onClick={signUpWithGoogle}
            type="button"
            className="btn btn-outline  w-full"
          >
            <span className="flex items-center w-full justify-between pr-20 gap-1">
              <span>
                <FcGoogle className="w-6 h-6 " />
              </span>
              <span className="text-center">Login With Google</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
