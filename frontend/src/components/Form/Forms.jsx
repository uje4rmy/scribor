import FormTopBar from "../FormTopBar";
import FormProgress from "../FormProgress/FormProgress";
import styles from "./Forms.module.css";
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

    // Store Form data in state
    const [formData, setFormData] = useState({
        clientInformation: {
            fullName: "",
            dob: "",
            abn: "",
            registeredAddress: "",
            residentialAddress: "",
            taxResidency: "",
            contactDetails: "",
        },
        clientType: {
            type: "",
            service: "",
        },
        ownershipControl: {
            directors: [""],
            owners: [""],
            pep: "",
            ownershipFile: null
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
        pepSanctions: {
            pep: "",
            closeAssociate: "",
            sanctions: "",
        },
        naturePurpose: {
            purpose: "",
            duration: "",
            oneOff: "",
        },
        declarations: {
            confirmInfo: "",
            amlConsent: "",
            idConsent: "",
        },
    });

    // Function to update a section
    const updateSection = (section, data) => {
        setFormData((prev) => ({
        ...prev,
        [section]: { ...prev[section], ...data },
        }));
    };

    // Render the current page
    const renderPage = () => {
        switch (currentPage) {
        case 1:
            return (
            <ClientInformation
                data={formData.clientInformation}
                update={(data) => updateSection("clientInformation", data)}
            />
            );
        case 2:
            return (
            <ClientType
                data={formData.clientType}
                update={(data) => updateSection("clientType", data)}
            />
            );
        case 3:
            return (
            <OwnershipControl
                data={formData.ownershipControl}
                update={(data) => updateSection("ownershipControl", data)}
            />
            );
        case 4:
            return (
            <SourceOfFunds
                data={formData.sourceOfFunds}
                update={(data) => updateSection("sourceOfFunds", data)}
            />
            );
        case 5:
            return (
            <CountryExposure
                data={formData.countryExposure}
                update={(data) => updateSection("countryExposure", data)}
            />
            );
        case 6:
            return (
            <PEPSanctions
                data={formData.pepSanctions}
                update={(data) => updateSection("pepSanctions", data)}
            />
            );
        case 7:
            return (
            <NaturePurpose
                data={formData.naturePurpose}
                update={(data) => updateSection("naturePurpose", data)}
            />
            );
        case 8:
            return (
            <Declarations
                data={formData.declarations}
                update={(data) => updateSection("declarations", data)}
            />
            );
        default:
            return null;
        }
    };

    // Navigation
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, 8));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    return (
    <>
    <div className="h-20 items-center justify-between px-8">
        <FormTopBar />
        <div>
            <h1 className="text-2xl font-semibold">Form</h1>
                <div className="mt-1 text-xs text-gray-500">
                    Step {currentPage} of 8
                </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-6 px-8 mt-6">
        
            {/* Left Progress Card */}
            <div className="w-72">
                <FormProgress
                    currentPage={currentPage}
                    goToPage={(page) => setCurrentPage(page)}
                />
            </div>
                {/* Load Component Based on Current Page */}
                {renderPage()}
              
                    {currentPage > 1 && (
                    <button
                        type="button"
                        onClick={prevPage}
                        className="rounded-md bg-gray-300 px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-400"
                    >
                        Back
                    </button>
                    )}
                    {currentPage < 8 ? (
                    <button
                        type="button"
                        onClick={nextPage}
                        className="rounded-md bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                    >
                        Next
                    </button>
                    ) : (
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="rounded-md bg-green-600 px-4 py-2 text-xs font-semibold text-white hover:bg-green-700"
                    >
                        Submit
                    </button>
                    )}
                </div>
            </div>

    </>
  );
};

export default Forms;