import React, { useState } from "react";
import MapWithAMakredInfoWindow from "./Map";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ValidationSchema, validationSchema } from "./validationSchema";
import GenericFormInput from "../../Shared/FormInput";
import { HomepageDocumentData } from "../../../../prismicio-types";

const Contact: React.FC<
  Pick<
    HomepageDocumentData,
    "map_label_link" | "map_label_text" | "map_lat" | "map_lng"
  >
> = ({ map_label_link, map_label_text, map_lat, map_lng }) => {
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
    <section className="contact-section" id="contact-section-id">
      <div id="contact" className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h1>צור קשר</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-sm-12"
              style={{ height: "410px", width: "100%" }}
            >
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
          </div>
          {showSuccess && (
            <div tw="flex items-center justify-center">
              <div className="success">הטופס נשלח בהצלחה</div>
            </div>
          )}
          {showError && (
            <div tw="flex items-center justify-center">
              <div className="error">
                שגיאה. ניתן ליצור קשר באמצעות המייל: boomtah@gmail.com
              </div>
            </div>
          )}
          {!showError && !showSuccess && (
            <form onSubmit={onSubmit}>
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <GenericFormInput
                          placeholder="שם"
                          errors={errors}
                          {...register("name")}
                        />
                      </div>
                      <div
                        className="form-group input-margin-top"
                        style={{ marginBottom: 0 }}
                      >
                        <GenericFormInput
                          {...register("phone", { required: true })}
                          placeholder="טלפון"
                          errors={errors}
                        />
                      </div>
                      <div className="form-group input-margin-top">
                        <GenericFormInput
                          {...register("email")}
                          placeholder="אימייל (אופציונאלי)"
                          errors={errors}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="row">
                    <div className="col-sm-12">
                      <textarea
                        {...register("message")}
                        className="form-control textarea"
                        placeholder="תוכן ההודעה (אופציונאלי)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <button
                    className="btn btn-secondary btn-lg btn-block button"
                    type="submit"
                  >
                    שלח
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
