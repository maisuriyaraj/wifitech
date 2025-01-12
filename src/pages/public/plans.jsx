import React from 'react';
import wifi from '../../assets/images/wifi.png';
import cancel from '../../assets/images/cancel.png';
import download from '../../assets/images/globe.png';
import AI from '../../assets/images/brain.png';
import Smiley from '../../assets/images/smiley.png';



export default function ServicePlans() {
  const [activeTab, setActiveTab] = React.useState(0);
  const Services = [
    {
      img: cancel,
      Title: "No ads",
      subTitle: "Study more efficiently."
    },
    {
      img: download,
      Title: "Download documents",
      subTitle: "Study offline."
    },
    {
      img: AI,
      Title: "AI content",
      subTitle: "Be ahead of the game."
    },
    {
      img: Smiley,
      Title: "Post anaoymously",
      subTitle: "Hide your identity."
    }
  ];

  const payments = [
    {
      title: "1 month",
      amount: "₹259",
      subTitle: "₹259 every 1 mo",
      discount: true
    },
    {
      title: "6 months",
      amount: "₹199",
      subTitle: "₹199 every 1 mo",
      discount: false
    },
    {
      title: "12 months",
      amount: "₹149",
      subTitle: "₹149 every 1 mo",
      discount: true
    }
  ]
  return (
    <div id="plansPage">
      <div className="container">
        <div className="section-header">
          <div className="logo">
            <img src={wifi} alt="WifiTech" />
            <p>Wifi<span>Tech</span></p>
          </div>
          <div className="switch-tabs d-flex align-items-center">
            <p className="mb-0 me-1">Pay with</p>
            <ul className="mb-0 d-flex list-unstyled">
              <li onClick={() => setActiveTab(0)} className={`tab-item ${activeTab == 0 ? 'active' : ''} `}>Money</li>
              <li onClick={() => setActiveTab(1)} className={`tab-item ${activeTab == 1 ? 'active' : ''} `}>Credits</li>
            </ul>
          </div>
        </div>
        <div className="plans-section mt-4">
          <div className="row px-0">
            <div className="col-md-4 mt-3">
              <div className="card service-card">
                {
                  Services.map((service, index) => (
                    <div className="service-items mb-3 mt-3" key={index}>
                      <div className="icon">
                        <img src={service.img} width={50} height={50} alt="" />
                      </div>
                      <div className="ms-3">
                        <p className="mb-0">{service.Title}</p>
                        <small>{service.subTitle}</small>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="col-md-8 mt-3">
              <div className="switch-tabs-mobile mb-3 mt-3">
                <p className="mb-0 me-1">Pay with</p>
                <ul className="mb-0 d-flex list-unstyled">
                  <li onClick={() => setActiveTab(0)} className={`tab-item ${activeTab == 0 ? 'active' : ''} `}>Money</li>
                  <li onClick={() => setActiveTab(1)} className={`tab-item ${activeTab == 1 ? 'active' : ''} `}>Credits</li>
                </ul>
              </div>
              <div className="payment-card">
                <h2 className="payment-card-title">Choose your plan</h2>
                <div className="row mt-4">
                  {
                    payments.map((payment, index) => (
                      <div className="col-lg-4 mt-4" key={index}>
                        <div className="card position-relative d-flex justify-content-center align-items-center flex-column">
                          {payment.discount && <div className="discount-badge position-absolute">
                            <p className="mb-0">SAVE 23%</p>
                          </div>}
                          <h5>{payment.title}</h5>
                          <div className="pay-amount text-center">
                            <p className="mb-0">{payment.amount}<small>/mo</small></p>
                            <span className="subtitle">{payment.subTitle}</span>
                          </div>
                          <button className="btn btn-primary mt-3">Choose Plan</button>
                        </div>
                      </div>

                    ))
                  }

                </div>
                <p className="mt-3 text-muted max-title">All prices are end prices and include all applicable taxes. You can cancel your subscriptionup to 48h before the end of your period.</p>
                <div className="alert-info border-none">
                  <h3 className="mb-0"><i className="bi bi-info-circle"></i></h3>
                  <p className="mb-0 ms-4">In case of credit card payment. Please verify that your credit card is activated for international online transections.</p>
                </div>
                <p className="mt-3 text-muted max-title">
                  By clicking on "Subscribe now" I acknowledge that our <a href="#">privacy policy</a> and our <a href="#">terms and conditions for Studydrive Primium</a> apply.              </p>

                <button className="subscribe-now-active">Subscribe now</button>
                <p className="mt-3 text-muted max-title">
                  Any questions ? check out our <a href="#">Primium FAQs</a> for furthur details.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
