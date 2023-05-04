import React from "react";
import axios from "axios";
import pick from "lodash/pick";
import MapWithAMakredInfoWindow from "./Map";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  // const onSubmit: SubmitHandler<FormValues> = (e) => {
  //   e.preventDefault();
  //   const data = { source: 'hompage', ...pick(this.state, ['name', 'email', 'phone', 'message']) };
  //   axios.post('/api/contactus', data).then((response) => {
  //     let formMessage; let
  //       formClass;
  //     if (response.status === 200) {
  //       formMessage = 'הטופס נשלח בהצלחה';
  //       formClass = 'success';
  //     } else {
  //       formMessage = 'שגיאה. ניתן ליצור קשר באמצעות המייל: boomtah@gmail.com';
  //       formClass = 'error';
  //     }
  //     this.setState({
  //       name: '',
  //       phone: '',
  //       email: '',
  //       message: '',
  //       formMessageClass: formClass,
  //       formMessageText: formMessage,
  //     });
  //   });
  // };

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
              />
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div id="form-messages" className={""}>
              form message text
            </div>
            <div className="row">
              <div className="col-sm-6">
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
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <input
                        {...register("name")}
                        className="form-control form-input"
                        placeholder="שם"
                      />
                    </div>
                    <div
                      className="form-group input-margin-top"
                      style={{ marginBottom: 0 }}
                    >
                      <input
                        {...register("phone")}
                        className="form-control form-input"
                        placeholder="טלפון"
                      />
                    </div>
                    <div className="form-group input-margin-top">
                      <input
                        {...register("email")}
                        className="form-control form-input"
                        placeholder="אימייל (אופציונאלי)"
                      />
                    </div>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
