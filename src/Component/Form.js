import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import SignatureCanvas from "react-signature-canvas";
import TradeArmyLogo from "../Assets/tradearmy.png";

const Form = () => {
  const [participantName, setParticipantName] = useState("");
  const [enrollmentDate, setEnrollmentDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sigCanvas = useRef(null);

  const handleUndo = () => {
    const data = sigCanvas.current.toData();
    if (data) {
      data.pop();
      sigCanvas.current.fromData(data);
    }
  };

  const handleGeneratePDF = async () => {
    if (sigCanvas.current.isEmpty()) {
      alert("Please provide your signature.");
      return;
    }

    // Adding a delay for rendering
    await new Promise((resolve) => setTimeout(resolve, 500));

    const pdf = new jsPDF("p", "mm", "a4");

    // Add the logo and bold title in the same line
    pdf.addImage(TradeArmyLogo, "PNG", 20, 10, 20, 20);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(14);
    pdf.text("FOREX TRAINING AGREEMENT", 50, 23);

    // Add the signature image to the PDF
    const signatureImage = sigCanvas.current.toDataURL();
    pdf.addImage(signatureImage, "PNG", 150, 265, 50, 20);

    // Add the rest of the PDF content with improved formatting
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);
    const textOptions = { align: "left" };

    pdf.text(
      'This Forex Training Agreement (referred to as the "Agreement") is entered into between',
      20,
      45,
      textOptions
    );
    pdf.text(
      `${participantName} (referred to as the "Participant") and TradeArmy (referred to as the "Provider").`,
      20,
      55,
      textOptions
    );

    pdf.text("1. Term", 20, 75, textOptions);
    pdf.text(
      "This Agreement shall be effective from the date of Participant's enrollment",
      20,
      85,
      textOptions
    );
    pdf.text(
      "in the three-month forex trading training program with TradeArmy and shall",
      20,
      95,
      textOptions
    );
    pdf.text(
      "continue for the duration of the training program.",
      20,
      105,
      textOptions
    );

    pdf.text("2. Fee Obligation", 20, 125, textOptions);
    pdf.text(
      "Participants acknowledge the obligation to remit a fee of $500 upon commencement",
      20,
      135,
      textOptions
    );
    pdf.text(
      "of profitable forex trading as per the terms outlined by TradeArmy.",
      20,
      145,
      textOptions
    );

    pdf.text("3. Attendance Commitment", 20, 165, textOptions);
    pdf.text(
      "Participants pledge to attend classes consistently, ensuring no more than three",
      20,
      175,
      textOptions
    );
    pdf.text(
      "absences per month or two per week throughout the duration of the training program.",
      20,
      185,
      textOptions
    );

    pdf.text("4. Approach to Learning", 20, 205, textOptions);
    pdf.text(
      "Participant affirms dedication to approaching this learning opportunity with utmost",
      20,
      215,
      textOptions
    );
    pdf.text(
      "seriousness and assures not to take it for granted.",
      20,
      225,
      textOptions
    );

    pdf.text(
      "IN WITNESS WHEREOF, the Participant has executed this Forex Learning Agreement,",
      20,
      245,
      textOptions
    );
    pdf.text(
      "acknowledging and accepting the terms and conditions set forth herein.",
      20,
      255,
      textOptions
    );

    // Use flex layout for signature, participant name, and date
    pdf.text(`Participant: ${participantName}`, 20, 275, textOptions);
    pdf.text(`Date: ${enrollmentDate}`, 20, 285, textOptions);

    pdf.save("forex_training_agreement.pdf");
    setIsModalOpen(false); // Close the modal after generating the PDF
  };

  return (
    <div className="px-10">
      <form className="lg:max-w-4xl max-w-sm mx-auto">
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700">
            Participant's Name:
          </label>
          <input
            type="text"
            value={participantName}
            placeholder="Name and Surname"
            onChange={(e) => setParticipantName(e.target.value)}
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mt-4">
            Enrollment Date:
          </label>
          <input
            type="date"
            value={enrollmentDate}
            onChange={(e) => setEnrollmentDate(e.target.value)}
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Signature */}
        <div className="mb-5">
          Signature:
          {/* Signature Pad with Edit and Clear buttons */}
          <div className="mt-4" id="signature-pad">
            <SignatureCanvas
              ref={(ref) => (sigCanvas.current = ref)}
              canvasProps={{
                className: "border border-gray-300 rounded-md",
              }}
            />
            <div className="mt-2 flex justify-between">
              <button
                type="button"
                onClick={() => sigCanvas.current.clear()}
                className="p-2 bg-red-500 text-white rounded-md"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={handleUndo}
                className="p-2 bg-gray-500 text-white rounded-md"
              >
                Undo
              </button>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="mt-4 p-2 bg-black text-white rounded-md"
        >
          Generate PDF
        </button>

        {/* PDF Generation Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md">
              <p className="text-lg font-semibold mb-4">
                Confirm PDF Generation
              </p>
              <p>Are you sure you want to generate the PDF?</p>
              <div className="flex justify-end mt-4">
                <button
                  className="p-2 bg-green-500 text-white rounded-md"
                  onClick={handleGeneratePDF}
                >
                  Yes
                </button>
                <button
                  className="p-2 bg-red-500 text-white rounded-md ml-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
