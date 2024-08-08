"use client"

import React from "react";
import Image from "next/image"
import {Card, CardBody, CardHeader} from "@nextui-org/card";

export function Portfolio() {
  return (
    <section className="flex flex-row w-full justify-center py-8">
      <div className="w-4/5">
        <h1 className="text-xl font-semibold uppercase text-center mb-4 tracking-wider">
          Portfolio
        </h1>
        <span className="w-full flex flex-row justify-between gap-4">
          <div className="w-5/12 flex justify-center">
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">Frontend Radio</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={270}
                  height={270}
                />
              </CardBody>
            </Card>
          </div>
          <div className="w-5/12 flex justify-center">
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">Frontend Radio</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={270}
                  height={270}
                />
              </CardBody>
            </Card>
          </div>
          <div className="w-5/12 flex justify-center">
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">Frontend Radio</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={270}
                  height={270}
                />
              </CardBody>
            </Card>
          </div>
          <div className="w-5/12 flex justify-center">
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">Frontend Radio</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={270}
                  height={270}
                />
              </CardBody>
            </Card>
          </div>
        </span>
      </div>
    </section>
  );
}