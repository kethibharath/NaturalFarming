import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';

const benefits = [
  {
    icon: '📚',
    title: 'Free Training & Resources',
    description: 'Access to comprehensive training programs, video modules, and handbooks'
  },
  {
    icon: '🤝',
    title: 'Community Support',
    description: 'Connect with expert trainers and fellow Natural Farming practitioners'
  },
  {
    icon: '💰',
    title: 'Financial Assistance',
    description: 'Guidance on subsidies, loans, and government schemes'
  },
  {
    icon: '📱',
    title: 'Regular Updates',
    description: 'Latest news, workshops, and best practices delivered to you'
  },
  {
    icon: '🌾',
    title: 'Input Support',
    description: 'Help with sourcing quality indigenous seeds and natural inputs'
  },
  {
    icon: '📊',
    title: 'Market Linkages',
    description: 'Access to premium markets for organic and natural produce'
  }
];

const whyRegister = [
  'Official recognition as a Natural Farming practitioner',
  'Priority access to training programs and workshops',
  'Eligibility for government schemes and subsidies',
  'Free consultation from agricultural experts',
  'Network with thousands of Natural Farmers across India',
  'Receive updates on policy changes and new initiatives'
];

const FarmerRegistration: React.FC = () => {
  const whySection = useScrollReveal<HTMLElement>();
  const benefitsSection = useScrollReveal<HTMLElement>();
  const formSection = useScrollReveal<HTMLElement>();

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    state: '',
    district: '',
    landSize: '',
    cropType: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.state) {
      newErrors.state = 'Please select your state';
    }

    if (!formData.district.trim()) {
      newErrors.district = 'District is required';
    }

    if (!formData.landSize) {
      newErrors.landSize = 'Please select land size';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you would normally send data to backend
      console.log('Form submitted:', formData);
      setSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: '',
          mobile: '',
          email: '',
          state: '',
          district: '',
          landSize: '',
          cropType: '',
          message: ''
        });
      }, 5000);
    }
  };

  return (
    <PageLayout>
      <PageHero
        title="Farmer Registration"
        subtitle="Join the Natural Farming Mission and become part of India's sustainable agriculture revolution."
      />

      {/* Why Register */}
      <section ref={whySection.ref} className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-6 text-center transition-all duration-700 ${whySection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
            Why Register with Natural Farming Mission?
          </h2>

          <p className={`text-center text-slate-700 mb-12 max-w-4xl mx-auto transition-all duration-700 ${whySection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`} style={{ transitionDelay: '100ms' }}>
            Registration connects you with a nationwide network of support, resources, and opportunities.
          </p>

          <div className={`bg-gradient-to-br from-[#ebf3ee] to-white rounded-[26px] p-8 md:p-12 shadow-lg transition-all duration-700 ${whySection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '200ms' }}>
            <div className="grid md:grid-cols-2 gap-6">
              {whyRegister.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-[#7fb43a] text-2xl mt-1">✓</span>
                  <span className="text-slate-700 text-lg">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitsSection.ref} className="py-16 px-4 bg-[#ebf3ee]">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-12 text-center transition-all duration-700 ${benefitsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
            Benefits of Registration
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`card-premium bg-white rounded-[26px] p-8 shadow-lg transition-all duration-500 ${benefitsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-[#0b7a3b] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section ref={formSection.ref} className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-[#0b7a3b] mb-6 text-center transition-all duration-700 ${formSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
            Registration Form
          </h2>

          <p className={`text-center text-slate-700 mb-12 transition-all duration-700 ${formSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`} style={{ transitionDelay: '100ms' }}>
            Fill out the form below to register. All fields marked with * are required.
          </p>

          <div className={`bg-[#ebf3ee] rounded-[36px] p-8 md:p-12 shadow-xl transition-all duration-700 ${formSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '200ms' }}>
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">✅</div>
                <h3 className="text-3xl font-bold text-[#0b7a3b] mb-4">
                  Registration Successful!
                </h3>
                <p className="text-lg text-slate-700 mb-6">
                  Thank you for registering with the Natural Farming Mission.
                </p>
                <p className="text-slate-600">
                  We will contact you shortly at your registered mobile number.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-[#0b7a3b] font-semibold mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${errors.fullName ? 'border-red-500' : 'border-[#7fb43a]/30'
                      } focus:border-[#7fb43a] focus:outline-none transition-colors`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-[#0b7a3b] font-semibold mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${errors.mobile ? 'border-red-500' : 'border-[#7fb43a]/30'
                      } focus:border-[#7fb43a] focus:outline-none transition-colors`}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                  )}
                </div>

                {/* Email (Optional) */}
                <div>
                  <label className="block text-[#0b7a3b] font-semibold mb-2">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${errors.email ? 'border-red-500' : 'border-[#7fb43a]/30'
                      } focus:border-[#7fb43a] focus:outline-none transition-colors`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* State and District */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#0b7a3b] font-semibold mb-2">
                      State <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${errors.state ? 'border-red-500' : 'border-[#7fb43a]/30'
                        } focus:border-[#7fb43a] focus:outline-none transition-colors`}
                    >
                      <option value="">Select State</option>
                      {states.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                    {errors.state && (
                      <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[#0b7a3b] font-semibold mb-2">
                      District <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${errors.district ? 'border-red-500' : 'border-[#7fb43a]/30'
                        } focus:border-[#7fb43a] focus:outline-none transition-colors`}
                      placeholder="Enter your district"
                    />
                    {errors.district && (
                      <p className="text-red-500 text-sm mt-1">{errors.district}</p>
                    )}
                  </div>
                </div>

                {/* Land Size */}
                <div>
                  <label className="block text-[#0b7a3b] font-semibold mb-2">
                    Land Size <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="landSize"
                    value={formData.landSize}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${errors.landSize ? 'border-red-500' : 'border-[#7fb43a]/30'
                      } focus:border-[#7fb43a] focus:outline-none transition-colors`}
                  >
                    <option value="">Select Land Size</option>
                    <option value="less-1">Less than 1 acre</option>
                    <option value="1-2">1-2 acres</option>
                    <option value="2-5">2-5 acres</option>
                    <option value="5-10">5-10 acres</option>
                    <option value="more-10">More than 10 acres</option>
                  </select>
                  {errors.landSize && (
                    <p className="text-red-500 text-sm mt-1">{errors.landSize}</p>
                  )}
                </div>

                {/* Crop Type */}
                <div>
                  <label className="block text-[#0b7a3b] font-semibold mb-2">
                    Primary Crop Type
                  </label>
                  <input
                    type="text"
                    name="cropType"
                    value={formData.cropType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#7fb43a]/30 focus:border-[#7fb43a] focus:outline-none transition-colors"
                    placeholder="e.g., Rice, Wheat, Cotton, Vegetables"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[#0b7a3b] font-semibold mb-2">
                    Message / Questions
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#7fb43a]/30 focus:border-[#7fb43a] focus:outline-none transition-colors resize-none"
                    placeholder="Any questions or additional information you'd like to share..."
                  />
                </div>

                {/* Privacy Note */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                  <p className="text-sm text-slate-700">
                    <strong className="text-[#0b7a3b]">Privacy Note:</strong> Your information will be used only for Natural Farming Mission purposes. We respect your privacy and will not share your data with third parties without your consent.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#FF8A1F] hover:bg-[#e67912] text-white px-8 py-4 rounded-full font-bold text-lg btn-premium hover:shadow-lg transition-all"
                >
                  Register Now
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FarmerRegistration;
