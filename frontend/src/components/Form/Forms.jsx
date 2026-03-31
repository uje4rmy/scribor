import FormTopBar from "../FormTopBar";
import FormProgress from "../FormProgress/FormProgress";
import ClientInformation from "./ClientInformation";
import ClientType from "./ClientType";
import OwnershipControl from "./OwnershipControl";
import SourceOfFunds from "./SourceOfFunds";
import CountryExposure from "./CountryExposure";
import PEPSanctions from "./PepSanctions";
import NaturePurpose from "./NaturePurpose";
import Declarations from "./Declarations";
import { useState } from "react";

const Forms = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    clientInformation: {
      fullName: "",
      dob: "",
      abn: "",
      registeredAddress: "",
      residentialAddress: "",
      taxResidency: "",
      email: "",
      phoneNumber: "",
    },
    clientType: { type: "", service: "" },
    ownershipControl: {
      directors: [""],
      owners: [""],
      pep: "",
      ownershipFile: null,
    },
    sourceOfFunds: {
      transactionValue: "",
      transferMethod: "",
      deliveryChannel: "",
      fundDescription: "",
    },
    countryExposure: {
      clientCountry: "",
      ownerCountry: "",
      connectedCountries: "",
      fundsOriginCountry: "",
    },
    pepSanctions: { pep: "", closeAssociate: "", sanctions: "" },
    naturePurpose: { purpose: "", duration: "", oneOff: "" },
    declarations: { confirmInfo: "", amlConsent: "", idConsent: "" },
  });

  const pageMap = {
    1: { component: ClientInformation, section: "clientInformation" },
    2: { component: ClientType, section: "clientType" },
    3: { component: OwnershipControl, section: "ownershipControl" },
    4: { component: SourceOfFunds, section: "sourceOfFunds" },
    5: { component: CountryExposure, section: "countryExposure" },
    6: { component: PEPSanctions, section: "pepSanctions" },
    7: { component: NaturePurpose, section: "naturePurpose" },
    8: { component: Declarations, section: "declarations" },
  };

  const requiredFieldsMap = {
    clientInformation: [
      "fullName",
      "dob",
      "abn",
      "registeredAddress",
      "residentialAddress",
      "taxResidency",
      "email",
      "phoneNumber",
    ],
    clientType: ["type", "service"],
    ownershipControl: ["pep"],
    sourceOfFunds: [
      "transactionValue",
      "transferMethod",
      "deliveryChannel",
      "fundDescription",
    ],
    countryExposure: [
      "clientCountry",
      "ownerCountry",
      "connectedCountries",
      "fundsOriginCountry",
    ],
    pepSanctions: ["pep", "closeAssociate", "sanctions"],
    naturePurpose: ["purpose", "duration", "oneOff"],
    declarations: ["confirmInfo", "amlConsent", "idConsent"],
  };

  const validatePage = () => {
    const page = pageMap[currentPage];
    if (!page) return true;

    const data = formData[page.section];
    const pageErrors = {};

    // Required fields validation
    requiredFieldsMap[page.section].forEach((field) => {
      if (!data[field] || data[field].toString().trim() === "") {
        pageErrors[field] = "This field is required";
      }
    });

    // Extra validations for Client Information
    if (page.section === "clientInformation") {
      if (data.abn && !/^\d{11}$/.test(data.abn)) {
        pageErrors.abn = "ABN must be exactly 11 digits";
      }

      if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        pageErrors.email = "Invalid email format";
      }

      if (data.phoneNumber && !/^[0-9+\-\s()]{7,15}$/.test(data.phoneNumber)) {
        pageErrors.phoneNumber = "Invalid phone number";
      }

      if (data.dob && !/^\d{4}-\d{2}-\d{2}$/.test(data.dob)) {
        pageErrors.dob = "Date of birth must be YYYY-MM-DD";
      }
    }

    setErrors(pageErrors);
    return Object.keys(pageErrors).length === 0;
  };

  const updateSection = (section, newData) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...newData },
    }));
  };

  const renderPage = () => {
    const page = pageMap[currentPage];
    if (!page) return null;

    const Component = page.component;

    return (
      <Component
        data={formData[page.section]}
        errors={errors}
        update={(data) => updateSection(page.section, data)}
      />
    );
  };

  const nextPage = () => {
    if (validatePage()) {
      setCurrentPage((prev) => Math.min(prev + 1, 8));
      setErrors({});
    }
  };

  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

const handleSubmit = () => {
  const { confirmInfo, amlConsent, idConsent } = formData.declarations;

  // Ensure all declarations are YES
  if (confirmInfo !== "yes" || amlConsent !== "yes" || idConsent !== "yes") {
    setErrors({
      confirmInfo:
        confirmInfo !== "yes"
          ? "You must confirm the information is true"
          : "",
      amlConsent:
        amlConsent !== "yes"
          ? "You must consent to AML screening"
          : "",
      idConsent:
        idConsent !== "yes"
          ? "You must consent to identity verification"
          : "",
    });

        alert("All declarations must be accepted before submitting.");
        return;
    }

    const confirmSubmit = window.confirm(
        "Are you ready to submit the form? Please confirm all information is correct."
    );

    if (!confirmSubmit) return;

    console.log("Form Submitted:", formData);
    };

  return (
    <>
      <div className="px-8">
        <FormTopBar />

        <div>
          <h1 className="text-2xl font-semibold">Form</h1>
          <div className="mt-1 text-xs text-gray-500">
            Step {currentPage} of 8
          </div>
        </div>

        <div className="flex gap-6 px-8 mt-6">
          {/* Sidebar */}
          <div className="w-72">
            <FormProgress
              currentPage={currentPage}
              goToPage={setCurrentPage}
            />
          </div>

          {/* Main Form */}
          <div className="flex flex-col flex-1">
            {renderPage()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              {currentPage > 1 ? (
                <button
                  type="button"
                  onClick={prevPage}
                  className="rounded-md bg-gray-300 px-6 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-400"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              {currentPage < 8 ? (
                <button
                  type="button"
                  onClick={nextPage}
                  className="rounded-md bg-slate-900 px-6 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="rounded-md bg-green-600 px-6 py-2 text-xs font-semibold text-white hover:bg-green-700"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forms;