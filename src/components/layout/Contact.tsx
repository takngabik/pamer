import {Button, Input, Textarea} from "@nextui-org/react";
import React from "react";

export function Contact() {
  return (
    <section className="flex flex-row w-full justify-center py-8">
      <div className="w-2/5">
        <h1 className="text-xl font-semibold uppercase text-center mb-4 tracking-wider">
          Contact Me
        </h1>
        <span className="w-full flex flex-col gap-4">
          <Input
            type="text"
            label="Full name"
            placeholder="Enter your full name"
          />
          <Input type="email" label="Email" placeholder="Enter a valid email"/>
          <Textarea
            type="text"
            label="Message"
            placeholder="Enter your messages"
            maxRows={5}
          />
          <Button
            variant="solid"
            color="primary"
            className="text-sm font-medium uppercase tracking-widest"
          >
            Send
          </Button>
        </span>
      </div>
    </section>
  );
}