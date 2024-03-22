import React from 'react';
import './Faqs.scss';

const Faqs = () => {
  return (
    <div className="FAQS" id="faqs">
      <div className="row">
        <div className="col-md-12">
          <h6 className="text-center my-3">
            <b className="faq-text">
              Find the answers for the most frequently asked questions in
              document below
            </b>
          </h6>
          <ul>
            <li className="py-2 faq-link">
              <a
                href="https://docs.google.com/document/d/1ULHlXbBjiMmFGPrpVIhyL0HDyXGapj-645iKK66Qnck/edit?usp=sharing"
                target="_blank"
                alt="Travel-checklist"
                rel="noopener noreferrer"
              >
                For Students transitioning to USA - Travel Checklist{' '}
              </a>
            </li>
            <li className="py-2 faq-link">
              <a
                href="https://docs.google.com/document/d/13LEEgoc2qOGUMZC77OhdzR83W-7D-f7l/edit?usp=sharing"
                target="_blank"
                alt="Application-phase"
                rel="noopener noreferrer"
              >
                For Students in Application Phase{' '}
              </a>
            </li>
            <li className="py-2 faq-link">
              <a
                href="https://docs.google.com/document/d/1rEXpwXxFVEyXWomSoo58e-8YKsjGR91h/edit?usp=sharing"
                target="_blank"
                alt="College-phase"
                rel="noopener noreferrer"
              >
                For Students in USA (College Phase){' '}
              </a>
            </li>
          </ul>
          <h6 className="disclaaimer">
            <b>
              Disclaimer: This FAQ is prepared based on past experiences of JJC
              members and in no way promoting any brands for use
            </b>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
