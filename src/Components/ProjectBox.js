import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    InventoryDesc: "A MERN-based inventory management system with JWT authentication. Features efficient product management and seamless deployment, hosted on Netlify for easiness.",
    InventoryGithub: "https://github.com/im-abubakar/Inventory-management-system",
    InventoryWebsite: "inventory-managment-sys.netlify.app/",

    EzPartyDesc: "A platform for booking top event services in your city. Connects users with trusted local vendors to plan perfect weddings, parties, and events effortlessly.",
    EzPartyGithub: "",
    EzPartyWebsite: "https://oneezparty.com/",

    OneupDesc: "An AI-powered platform offering customized investment solutions. Ensures control, and smarter financial management for users seeking seamless investment opportunities.",
    OneupGithub: "",
    OneupWebsite: "https://oneuppp.netlify.app",

    DigitalKhataDesc: "A React-based digital ledger with a Supabase backend, built for a local client to manage customer entries, item weights, costs, and balances — tailored for the Dhalai brass business.",
    DigitalKhataGithub: "",
    DigitalKhataWebsite: "https://khataa-appp.netlify.app",

    PointOfSaleDesc: "A Next.js POS system with MongoDB backend for a local Dhalai brass business. Handles product entry, cost with labor, sales tracking, and inventory all in a smooth, responsive interface.",
    PointOfSaleGithub: "",
    PointOfSaleWebsite: "https://inventory-dhalai-update-jqeb.vercel.app",

    ARFurnitureWebAppDesc: "A Next.js based AR web app for visualizing 3D furniture in real-world spaces. Built for interior design shopping with user login and immersive product previews.",
    ARFurnitureWebAppGithub: "",
    ARFurnitureWebAppWebsite: "https://ar-decoration-app.vercel.app",

    EcommerceStoreDesc: "A full-stack eCommerce platform with Next.js frontend & Express.js backend. Includes product browsing, cart management, & checkout. Built scalability and smooth experience.",
    EcommerceStoreGithub: "",
    EcommerceStoreWebsite: "https://www.sastamal.store",

    AnonymousMessageSenderDesc: "A simple web app that allows users to send anonymous text messages directly to an email inbox. No login required just type and send securely.",
    AnonymousMessageSenderGithub: "",
    AnonymousMessageSenderWebsite: "https://say-it-secretly.netlify.app/?fbclid=PAZXh0bgNhZW0CMTEAAaf3ko8tgBbOuKnYDs0u-KA1iiAfpiJziyLT1EbCvJ8pTt0odU9W2T9ikQX_RQ_aem_gqtkG7OFqrKx2lvtBNIt6Q",
  };

  // Normalize project name by removing spaces
  const keyPrefix = projectName.replace(/\s+/g, '');

  const show = desc[keyPrefix + 'Github'] === "" ? "none" : "";

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[keyPrefix + 'Desc']}
        <br />

        <a style={{ display: show }} href={desc[keyPrefix + 'Github']}>
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>

        <a href={desc[keyPrefix + 'Website']}>
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
