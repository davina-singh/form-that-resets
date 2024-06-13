"use client";
import { formAction } from "@/lib/actions";
import { useRef } from "react";

export default function Home() {
  // useRef gives an object with a "current" property
  // like useState, what is in the brackets is the initial value of the variable
  // so ref = {current:null}
  const formRef = useRef(null);
  // putting ref={ref} on the form tag means sets formRef to be the DOM node of the form
  // so that when inputs are updating on the form, DOM nodes update and therefore formRef
  // after submitting, the formRef is set back to null (making the form empty again)
  return (
    <div>
      <h1>Form that resets</h1>
      <form
        action={(formData) => {
          formAction(formData);
          formRef.current.reset(); // current is our DOM node which means it has a reset method to reset the form
        }}
        ref={formRef}
      >
        <input name="message" placeholder="your message" />
        <button>Submit</button>
      </form>
    </div>
  );
}
