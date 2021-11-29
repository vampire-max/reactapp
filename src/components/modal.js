import React, { useEffect, useState } from "react";
import "../styles/modal.css";

const Modal = ({ isModalOpen }) => {
  return (
    <div
      className={isModalOpen ? "modal-position" : "modal-position modal-hidden"}
    >
      <div className="modal">
        <ul jsname="modal-list" className="modal-list">
          <li>
            <a
              href="https://myaccount.google.com/?utm_source=OGB&amp;utm_medium=app"
              target="_top"
              data-pid="192"
              jslog="46976; 1:192; track:click; index:0"
              jsname="hSRGPd"
            >
              <div className="icon-thumb-wrapper">
                <span
                  className="icon-thumb"
                  style={{ backgroundPosition: "0 -1587px" }}
                ></span>
              </div>
              <span className="icon-desc">Account</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com.hk/webhp"
              target="_top"
              data-pid="1"
              jslog="46976; 1:1; track:click; index:1"
              jsname="hSRGPd"
            >
              <div className="icon-thumb-wrapper">
                <span
                  className="icon-thumb"
                  style={{ backgroundPosition: "0 -1794px" }}
                ></span>
              </div>
              <span className="icon-desc">Search</span>
            </a>
          </li>
          <li>
            <a
              href="https://maps.google.com/maps?hl=en"
              target="_top"
              data-pid="8"
              jslog="46976; 1:8; track:click; index:2"
              jsname="hSRGPd"
            >
              <div className="icon-thumb-wrapper">
                <span
                  className="icon-thumb"
                  style={{ backgroundPosition: " 0 -483px" }}
                ></span>
              </div>
              <span className="icon-desc">Maps</span>
            </a>
          </li>
          <li>
            <a
              href="https://play.google.com/?hl=en"
              target="_top"
              data-pid="78"
              jslog="46976; 1:78; track:click; index:3"
              jsname="hSRGPd"
            >
              <div className="icon-thumb-wrapper">
                <span
                  className="icon-thumb"
                  style={{ backgroundPosition: " 0 -207px" }}
                ></span>
              </div>
              <span className="icon-desc">Play</span>
            </a>
          </li>
          <li>
            <a
              href="https://news.google.com/"
              target="_top"
              data-pid="426"
              jslog="46976; 1:426; track:click; index:4"
              jsname="hSRGPd"
            >
              <div className="icon-thumb-wrapper">
                <span
                  className="icon-thumb"
                  style={{ backgroundPosition: "0 -1311px" }}
                ></span>
              </div>
              <span className="icon-desc">News</span>
            </a>
          </li>
          <li>
            <a
              href="https://meet.google.com?hs=197"
              target="_top"
              data-pid="411"
              jslog="46976; 1:411; track:click; index:5"
              jsname="hSRGPd"
            >
              <div className="icon-thumb-wrapper">
                <span
                  className="icon-thumb"
                  style={{ backgroundPosition: " 0 -690px" }}
                ></span>
              </div>
              <span className="icon-desc">Meet</span>
            </a>
          </li>
          <li>
            <a
              href="https://chat.google.com/"
              target="_top"
              data-pid="385"
              jslog="46976; 1:385; track:click; index:6"
              jsname="hSRGPd"
            >
              <div className="icon-thumb-wrapper">
                <span
                  className="icon-thumb"
                  style={{ backgroundPosition: "0 -1656px" }}
                ></span>
              </div>
              <span className="icon-desc">Chat</span>
            </a>
          </li>
          <li>
            <a
              href="https://contacts.google.com/?hl=en"
              target="_top"
              data-pid="53"
              jslog="46976; 1:53; track:click; index:7"
              jsname="hSRGPd"
            >
              <div className="icon-thumb-wrapper">
                <span
                  className="icon-thumb"
                  style={{ backgroundPosition: "0 -2898px" }}
                ></span>
              </div>
              <span className="icon-desc">Contacts</span>
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/"
              target="_top"
              data-pid="49"
              jslog="46976; 1:49; track:click; index:8"
              jsname="hSRGPd"
            >
              <div className="icon-thumb-wrapper">
                <span
                  className="icon-thumb"
                  style={{ backgroundPosition: "0 -2967px" }}
                ></span>
              </div>
              <span className="icon-desc">Drive</span>
            </a>
          </li>
          <li>
            <a
              href="https://calendar.google.com/calendar"
              target="_top"
              data-pid="24"
              jslog="46976; 1:24; track:click; index:9"
              jsname="hSRGPd"
            >
              <div className="icon-thumb-wrapper">
                <span
                  className="icon-thumb"
                  style={{ backgroundPosition: "0 -2553px" }}
                ></span>
              </div>
              <span className="icon-desc">Calendar</span>
            </a>
          </li>
          <li>
            <a
              href="https://translate.google.cn/?hl=en"
              target="_top"
              data-pid="51"
              jslog="46976; 1:51; track:click; index:10"
              jsname="hSRGPd"
            >
              <div className="icon-thumb-wrapper">
                <span
                  className="icon-thumb"
                  style={{ backgroundPosition: "0 -1932px" }}
                ></span>
              </div>
              <span className="icon-desc">Translate</span>
            </a>
          </li>
          <li>
            <a
              href="https://photos.google.com/?pageId=none"
              target="_top"
              data-pid="31"
              jslog="46976; 1:31; track:click; index:11"
              jsname="hSRGPd"
            >
              <div className="icon-thumb-wrapper">
                <span
                  className="icon-thumb"
                  style={{ backgroundPosition: "0 -2829px" }}
                ></span>
              </div>
              <span className="icon-desc">Photos</span>
            </a>
          </li>
          <li>
            <a
              href="https://duo.google.com/?usp=duo_ald"
              target="_top"
              data-pid="461"
              jslog="46976; 1:461; track:click; index:12"
              jsname="hSRGPd"
            >
              <div className="icon-thumb-wrapper">
                <span
                  className="icon-thumb"
                  style={{ backgroundPosition: "0 -2484px" }}
                ></span>
              </div>
              <span className="icon-desc">Duo</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
