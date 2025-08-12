import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../supabase/supabase";
import { ArrowRight, Clock, CheckCircle, XCircle } from "lucide-react";

const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

function Register() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    state: "",
  });

  const handleStart = () => {
    setCurrentStep(1);
  };

  const handleNext = async () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitting(true);

      try {
        const { error } = await supabase.from("contact").insert([
          {
            fullName: formData.fullName,
            email: formData.email,
            state: formData.state,
          },
        ]);

        if (error) {
          throw error;
        }

        setSubmissionStatus("success");
      } catch (error) {
        setSubmissionStatus("error");
        console.error("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isSubmitting) {
      handleNext();
    }
  };

  const handleRetry = () => {
    setSubmissionStatus(null);
    setCurrentStep(3);
  };

  const handleStartOver = () => {
    setCurrentStep(0);
    setSubmissionStatus(null);
    setFormData({
      fullName: "",
      email: "",
      state: "",
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const ProgressBar = () => {
    const totalSteps = 3;

    return (
      <div className="flex justify-center gap-2 mb-12 transform transition-all duration-500 ease-out">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`h-1 w-16 rounded-full transition-all duration-300 ${
              index < currentStep ? "bg-teal-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  // Pantalla inicial
  if (currentStep === 0) {
    return (
      <div className="relative overflow-hidden">
        <div className="absolute top-8 left-8 transform transition-all duration-500 ease-out">
          <Link
            to="/"
            className="text-2xl font-medium text-gray-800 flex items-center space-x-1"
          >
            <span>HealtCode</span>
            <span className="text-teal-600 font-bold flex items-center space-x-0.5">
              <span>360</span>
            </span>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen transform transition-all duration-700 ease-out">
          <h2 className="text-3xl font-medium text-gray-800 mb-12 transform transition-all duration-500 delay-200 ease-out">
            Sign-up for healtcode360
          </h2>

          <button
            onClick={handleStart}
            className="bg-teal-600 text-white cursor-pointer px-8 py-3 rounded-full hover:bg-teal-700 transition-all duration-200 font-medium text-lg flex items-center gap-3"
          >
            Start
            <div className="bg-white rounded-full p-1">
              <ArrowRight className="w-5 h-5 text-teal-600" />
            </div>
          </button>

          <div className="flex items-center gap-2 mt-5 text-gray-600 transform transition-all duration-500 delay-400 ease-out">
            <Clock size={16} />
            <span className="text-sm">Takes 1 minute</span>
          </div>
        </div>
      </div>
    );
  }

  // Pantalla de carga durante envío
  if (isSubmitting) {
    return (
      <div className="min-h-screen relative">
        <div className="absolute top-8 left-8">
          <Link
            to="/"
            className="text-2xl font-medium text-gray-800 flex items-center space-x-1"
          >
            <span>HealtCode</span>
            <span className="text-teal-600 font-bold flex items-center space-x-0.5">
              <span>360</span>
            </span>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-teal-600 mb-6"></div>
          <h2 className="text-2xl font-medium text-gray-800 mb-4">
            Submitting your information...
          </h2>
          <p className="text-gray-600">
            Please wait while we process your data
          </p>
        </div>
      </div>
    );
  }

  // Pantalla de éxito
  if (submissionStatus === "success") {
    return (
      <div className="min-h-screen relative">
        <div className="absolute top-8 left-8">
          <Link
            to="/"
            className="text-2xl font-medium text-gray-800 flex items-center space-x-1"
          >
            <span>HealtCode</span>
            <span className="text-teal-600 font-bold flex items-center space-x-0.5">
              <span>360</span>
            </span>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen px-8">
          <div className="w-full max-w-md text-center transform transition-all duration-500 ease-out">
            <div className="mb-6 transform transition-all duration-500 delay-200 ease-out">
              <CheckCircle
                size={64}
                className="text-green-500 mx-auto mb-4 animate-pulse"
              />
            </div>

            <h2 className="text-3xl font-medium text-gray-800 mb-4 transform transition-all duration-500 delay-300 ease-out">
              Success!
            </h2>

            <p className="text-gray-600 mb-8 transform transition-all duration-500 delay-400 ease-out">
              Your information has been stored correctly. Welcome to
              HealtCode360!
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8 transform transition-all duration-500 delay-500 ease-out">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Your Information:
              </h3>
              <div className="text-left space-y-2 text-gray-600">
                <p>
                  <strong>Name:</strong> {formData.fullName}
                </p>
                <p>
                  <strong>Email:</strong> {formData.email}
                </p>
                <p>
                  <strong>State:</strong> {formData.state}
                </p>
              </div>
            </div>

            <Link
              to="/"
              replace
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full transition-all duration-300 ease-out transform hover:scale-105 inline-block text-center"
            >
              Return to home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Pantalla de error
  if (submissionStatus === "error") {
    return (
      <div className="min-h-screen bg-gray-200 relative">
        <div className="absolute top-8 left-8">
          <Link
            to="/"
            className="text-2xl font-medium text-gray-800 flex items-center space-x-1"
          >
            <span>HealtCode</span>
            <span className="text-teal-600 font-bold flex items-center space-x-0.5">
              <span>360</span>
            </span>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen px-8">
          <div className="w-full max-w-md text-center transform transition-all duration-500 ease-out">
            <div className="mb-6 transform transition-all duration-500 delay-200 ease-out">
              <XCircle
                size={64}
                className="text-red-500 mx-auto mb-4 animate-pulse"
              />
            </div>

            <h2 className="text-3xl font-medium text-gray-800 mb-4 transform transition-all duration-500 delay-300 ease-out">
              Oops! Something went wrong
            </h2>

            <p className="text-gray-600 mb-8 transform transition-all duration-500 delay-400 ease-out">
              There was an error storing your information. Please try again.
            </p>

            <div className="flex gap-4 justify-center transform transition-all duration-500 delay-500 ease-out">
              <button
                onClick={handleRetry}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full transition-all duration-300 ease-out transform hover:scale-105"
              >
                Try Again
              </button>

              <button
                onClick={handleStartOver}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-all duration-300 ease-out transform hover:scale-105"
              >
                Start Over
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Función para obtener el contenido del paso actual
  const getStepContent = () => {
    const steps = [
      {
        number: 1,
        question: "What is your full name?",
        description: "Please enter your first name",
        placeholder: "Ej. John",
        field: "fullName",
        type: "text",
      },

      {
        number: 2,
        question: "What is your email address?",
        description: "Please enter your email address",
        placeholder: "Ej. john.doe@email.com",
        field: "email",
        type: "email",
      },

      {
        number: 3,
        question: "What state are you in?",
        description: "Please select your state",
        placeholder: "Select a state...",
        field: "state",
        type: "select",
      },
    ];

    return steps[currentStep - 1];
  };

  const stepContent = getStepContent();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute top-8 left-8 transform transition-all duration-500 ease-out">
        <Link
          to="/"
          className="text-2xl font-medium text-gray-800 flex items-center space-x-1"
        >
          <span>HealtCode</span>
          <span className="text-teal-600 font-bold flex items-center space-x-0.5">
            <span>360</span>
          </span>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen px-8">
        <div className="w-full max-w-md transform transition-all duration-500 ease-out">
          <ProgressBar />

          <h2 className="text-2xl font-medium text-gray-800 mb-4 transform transition-all duration-300 ease-out">
            {stepContent.number}- {stepContent.question}*
          </h2>

          <p className="text-gray-600 mb-8 transform transition-all duration-300 delay-100 ease-out">
            {stepContent.description}
          </p>

          <div className="mb-8 transform transition-all duration-300 delay-200 ease-out">
            {stepContent.type === "select" ? (
              <>
                <select
                  value={formData[stepContent.field as keyof typeof formData]}
                  onChange={(e) =>
                    handleInputChange(stepContent.field, e.target.value)
                  }
                  className="w-full bg-transparent border-none border-b-2 border-gray-800 pb-2 text-lg text-gray-800 focus:outline-none focus:border-teal-600 transition-colors duration-300"
                  autoFocus
                >
                  <option value="" className="text-gray-500">
                    {stepContent.placeholder}
                  </option>
                  {US_STATES.map((state) => (
                    <option key={state} value={state} className="text-gray-800">
                      {state}
                    </option>
                  ))}
                </select>
                <div className="w-full h-0.5 bg-black mt-[-2px]" />
              </>
            ) : (
              <>
                <input
                  type={stepContent.type}
                  value={formData[stepContent.field as keyof typeof formData]}
                  onChange={(e) =>
                    handleInputChange(stepContent.field, e.target.value)
                  }
                  onKeyPress={handleKeyPress}
                  placeholder={stepContent.placeholder}
                  className="w-full bg-transparent border-none border-b-2 border-gray-800 pb-2 text-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-teal-600 transition-colors duration-300"
                  autoFocus
                />
                <div className="w-full h-0.5 bg-black mt-[-2px]" />
              </>
            )}
          </div>

          <div className="flex items-center gap-4 transform transition-all duration-300 delay-300 ease-out">
            <button
              onClick={handleNext}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg"
            >
              <span className="font-medium">
                {currentStep === 3 ? "Complete" : "Next"}
              </span>
              <div className="bg-white rounded-full p-1">
                <ArrowRight
                  size={18}
                  className="transition-transform text-teal-600 duration-300 group-hover:translate-x-1"
                />
              </div>
            </button>

            <span className="text-gray-600 transition-opacity duration-300">
              Or press "enter"
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
