import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

import "./CSS/Home.css";

export default function HomeComponent() {
      return (
            <div className="h-outer-wrapper">
                  <div className="h-upper-modal">
                  <div className="h-heading-wrapper">
                        <div className="h-text-container">The Basic One</div>
                        <div className="h-logo">
                              <img src="./assets/ico.jpeg"></img>
                        </div>
                  </div>

                  <div className="h-button-group">
                        <div className="h-button1 h-button">
                              <button className="h-btn h-header__btn">
                              Register / Login
                              </button>
                        </div>
                        <div className="h-button2 h-button">
                              <button className="h-btn h-header__btn">
                              Login as Guest
                              </button>
                        </div>
                  </div>
                  </div>

                  <div className="h-lower-modal">

                  <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        Developers
                    </h2>
                  </div>

                  <div className="h-row">
                  <div className="h-story">
                        <figure className="h-story__shape">
                              <img
                                    src="./assets/avt2.png"
                                    alt="Person on a tour"
                                    className="h-story__img"
                              />
                              <figcaption className="h-story__caption">
                                    Mary Smith
                              </figcaption>
                        </figure>
                        <div className="h-story__text">
                              <h3 className="h-heading-tertiary h-u-margin-bottom-small">
                                    I had the best week ever with my family
                              </h3>
                              <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Aperiam, ipsum sapiente aspernatur libero
                              repellat quis consequatur ducimus quam nisi
                              exercitationem omnis earum qui. Aperiam, ipsum
                              </p>
                        </div>
                  </div>
                  </div>

                  <div className="h-row">
                  <div className="h-story">
                        <figure className="h-story__shape">
                              <img
                                    src="./assets/avt2.png"
                                    alt="Person on a tour"
                                    className="h-story__img"
                              />
                              <figcaption className="h-story__caption">
                                    Mary Smith
                              </figcaption>
                        </figure>
                        <div className="h-story__text">
                              <h3 className="h-heading-tertiary h-u-margin-bottom-small">
                                    I had the best week ever with my family
                              </h3>
                              <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Aperiam, ipsum sapiente aspernatur libero
                              repellat quis consequatur ducimus quam nisi
                              exercitationem omnis earum qui. Aperiam, ipsum
                              </p>
                        </div>
                  </div>
                  </div>

                  <div className="h-row">
                  <div className="h-story">
                        <figure className="h-story__shape">
                              <img
                                    src="./assets/avt2.png"
                                    alt="Person on a tour"
                                    className="h-story__img"
                              />
                              <figcaption className="h-story__caption">
                                    Mary Smith
                              </figcaption>
                        </figure>
                        <div className="h-story__text">
                              <h3 className="h-heading-tertiary h-u-margin-bottom-small">
                                    I had the best week ever with my family
                              </h3>
                              <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Aperiam, ipsum sapiente aspernatur libero
                              repellat quis consequatur ducimus quam nisi
                              exercitationem omnis earum qui. Aperiam, ipsum
                              </p>
                        </div>
                  </div>
                  </div>

                  <div className="h-row">
                  <div className="h-story">
                        <figure className="h-story__shape">
                              <img
                                    src="./assets/avt2.png"
                                    alt="Person on a tour"
                                    className="h-story__img"
                              />
                              <figcaption className="h-story__caption">
                                    Mary Smith
                              </figcaption>
                        </figure>
                        <div className="h-story__text">
                              <h3 className="h-heading-tertiary h-u-margin-bottom-small">
                                    I had the best week ever with my family
                              </h3>
                              <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Aperiam, ipsum sapiente aspernatur libero
                              repellat quis consequatur ducimus quam nisi
                              exercitationem omnis earum qui. Aperiam, ipsum
                              </p>
                        </div>
                  </div>
                  </div>


                  </div>
                  
            </div>
      );
}