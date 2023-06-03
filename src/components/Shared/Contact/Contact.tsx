"use client";

import React, { useState } from "react";
import cn from "@/src/lib/utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { HomepageDocumentData } from "../../../../prismicio-types";
import GenericFormInput from "../FormInput";
import SectionTitle from "../SectionTitle";
import MapWithAMakredInfoWindow from "./Map";
import { ValidationSchema, validationSchema } from "./validationSchema";

const Contact: React.FC<
  Pick<
    HomepageDocumentData,
    "map_label_link" | "map_label_text" | "map_lat" | "map_lng"
  > & { source: "homepage" | "blog" }
> = ({ map_label_link, map_label_text, map_lat, map_lng, source }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationSchema>({ resolver: zodResolver(validationSchema) });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const result = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (result.ok) {
        setShowSuccess(true);
        reset();
      } else {
        setShowError(true);
      }
    } catch (e) {
      setShowError(true);
    }
    reset();
  });

  return (
    <section id="contact-section-id">
      <div
        id="contact"
        className={cn(
          "h-full w-full bg-black/90",
          source === "blog" && "py-10"
        )}
      >
        <div className="my-container">
          <SectionTitle className="flex text-white">צור קשר</SectionTitle>
          <div className="h-[410px] w-full">
            <MapWithAMakredInfoWindow
              // @ts-ignore
              googleMapURL={
                "https://maps.googleapis.com/maps/api/js?" +
                `key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&language=he&region=IL`
              }
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "400px" }} />}
              mapElement={<div style={{ height: "100%" }} />}
              map_label_link={map_label_link}
              map_label_text={map_label_text}
              map_lat={map_lat}
              map_lng={map_lng}
            />
          </div>
          {showSuccess && (
            <div className="flex-center">
              <div className="my-20 rounded-lg border border-green-500 bg-green-100 p-[1em] text-green-600">
                הטופס נשלח בהצלחה
              </div>
            </div>
          )}

          {showError && (
            <div className="flex-center">
              <div className="my-20 rounded-lg border border-red-600 bg-red-100 p-[1em] font-hebrew text-red-600">
                שגיאה. ניתן ליצור קשר באמצעות המייל: boomtah@gmail.com
              </div>
            </div>
          )}
          {!showError && !showSuccess && (
            <form onSubmit={onSubmit}>
              <div
                className={cn(
                  "flex flex-col gap-4 md:flex-row md:gap-8",
                  source === "blog" && "md:flex-row-reverse"
                )}
              >
                <div className="w-full">
                  <GenericFormInput
                    placeholder="שם"
                    errors={errors}
                    className={cn(
                      source === "blog" &&
                        "font-sans align-right placeholder:font-sans"
                    )}
                    {...register("name")}
                  />
                  <div className="mt-4" style={{ marginBottom: 0 }}>
                    <GenericFormInput
                      {...register("phone", { required: true })}
                      placeholder="טלפון"
                      className={cn(
                        source === "blog" &&
                          "font-sans align-right placeholder:font-sans"
                      )}
                      errors={errors}
                    />
                  </div>
                  <div className="mt-4">
                    <GenericFormInput
                      {...register("email")}
                      placeholder="אימייל (אופציונאלי)"
                      className={cn(
                        source === "blog" &&
                          "font-sans align-right placeholder:font-sans"
                      )}
                      errors={errors}
                    />
                  </div>
                </div>
                <textarea
                  {...register("message")}
                  className={cn(
                    "mb-4 h-[180px] w-full resize-none border border-gray-300 bg-transparent p-3 font-hebrew text-white outline-none align-right placeholder:font-hebrew placeholder:text-gray-500",
                    source === "blog" && "font-sans placeholder:font-sans"
                  )}
                  placeholder="תוכן ההודעה (אופציונאלי)"
                />
              </div>
              <button
                className={cn(
                  "w-full border border-white py-4 font-hebrew text-sm tracking-widest text-primary transition-colors duration-300 hover:bg-white",
                  source === "blog" && "font-sans"
                )}
                type="submit"
              >
                שלח
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
