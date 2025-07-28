"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { CreditCard, ShoppingCart, User, MapPin } from "lucide-react";

interface FormData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  adresse: string;
  ville: string;
  codePostal: string;
  pays: string;
  nomPorteur: string;
  carteBancaire: string;
  dateExpiration: string;
  cvv: string;
}

const PaymentPage = () => {
  const searchParams = useSearchParams();

  const [animes, setAnimes] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    adresse: "",
    ville: "",
    codePostal: "",
    pays: "France",
    nomPorteur: "",
    carteBancaire: "",
    dateExpiration: "",
    cvv: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const raw = searchParams.get("animes");
    if (raw) {
      try {
        setAnimes(JSON.parse(raw));
      } catch {
        setAnimes([]);
      }
    }
  }, [searchParams]);

  const calculateTotal = () => {
    const basePrice = 50.0;
    const subtotal = basePrice;
    const shipping = 0;
    const tax = subtotal * 0.2;
    return {
      subtotal: subtotal.toFixed(2),
      shipping: shipping.toFixed(2),
      tax: tax.toFixed(2),
      total: (subtotal + tax).toFixed(2),
    };
  };

  const totals = calculateTotal();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Validation functions remain unchanged...

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.prenom.trim()) newErrors.prenom = "Le prénom est requis";
    if (!formData.nom.trim()) newErrors.nom = "Le nom est requis";
    if (!formData.email.trim()) newErrors.email = "L'email est requis";
    if (!formData.telephone.trim()) newErrors.telephone = "Le téléphone est requis";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.adresse.trim()) newErrors.adresse = "L'adresse est requise";
    if (!formData.ville.trim()) newErrors.ville = "La ville est requise";
    if (!formData.codePostal.trim()) newErrors.codePostal = "Le code postal est requis";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.carteBancaire.trim()) newErrors.carteBancaire = "Le numéro de carte est requis";
    if (!formData.dateExpiration.trim()) newErrors.dateExpiration = "La date d'expiration est requise";
    if (!formData.cvv.trim()) newErrors.cvv = "Le CVV est requis";
    if (!formData.nomPorteur.trim()) newErrors.nomPorteur = "Le nom du porteur est requis";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    let isValid = false;
    if (currentStep === 1) isValid = validateStep1();
    else if (currentStep === 2) isValid = validateStep2();
    else if (currentStep === 3) isValid = validateStep3();

    if (isValid && currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handleSubmit = () => {
    if (validateStep3()) {
      alert(
        `Commande validée pour ${formData.prenom} ${formData.nom}\n` +
        `Total: ${totals.total}€\n` +
        `Boîte Mystère basée sur: ${animes.join(", ")}`
      );
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : v;
  };

  return (
    <div className="min-h-screen bg-[#121212] py-8 text-gray-300 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        {/* En-tête étapes */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-violet-400 mb-6 tracking-wide">Finaliser votre commande</h1>
          <div className="flex justify-center items-center space-x-6 mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg cursor-default select-none
                  ${
                    currentStep === step
                      ? "bg-violet-600 text-white shadow-lg"
                      : currentStep > step
                      ? "bg-violet-700 text-violet-300"
                      : "bg-gray-700 text-gray-500"
                  }
                `}>
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-20 h-1 mx-3 rounded-full
                      ${
                        currentStep > step
                          ? "bg-violet-600"
                          : "bg-gray-700"
                      }
                    `}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-12 text-violet-400 text-sm font-semibold tracking-wide">
            <span className={currentStep >= 1 ? "text-violet-400" : "text-gray-600"}>Informations</span>
            <span className={currentStep >= 2 ? "text-violet-400" : "text-gray-600"}>Livraison</span>
            <span className={currentStep >= 3 ? "text-violet-400" : "text-gray-600"}>Paiement</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Formulaire */}
          <div className="lg:col-span-2 bg-[#1a1a1a] rounded-xl shadow-xl p-10">
            {/* Étape 1 */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="flex items-center mb-6">
                  <User className="w-7 h-7 text-violet-400 mr-4" />
                  <h2 className="text-3xl font-semibold text-violet-300">Informations personnelles</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="Prénom *"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    error={errors.prenom}
                    placeholder="Votre prénom"
                  />
                  <InputField
                    label="Nom *"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    error={errors.nom}
                    placeholder="Votre nom"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="Email *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="exemple@domaine.com"
                  />
                  <InputField
                    label="Téléphone *"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    error={errors.telephone}
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
              </div>
            )}

            {/* Étape 2 */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="flex items-center mb-6">
                  <MapPin className="w-7 h-7 text-violet-400 mr-4" />
                  <h2 className="text-3xl font-semibold text-violet-300">Adresse de livraison</h2>
                </div>
                <InputField
                  label="Adresse *"
                  name="adresse"
                  value={formData.adresse}
                  onChange={handleChange}
                  error={errors.adresse}
                  placeholder="123 Rue Exemple"
                />
                <div className="grid md:grid-cols-3 gap-6">
                  <InputField
                    label="Ville *"
                    name="ville"
                    value={formData.ville}
                    onChange={handleChange}
                    error={errors.ville}
                    placeholder="Paris"
                  />
                  <InputField
                    label="Code Postal *"
                    name="codePostal"
                    value={formData.codePostal}
                    onChange={handleChange}
                    error={errors.codePostal}
                    placeholder="75001"
                  />
                  <div className="flex flex-col">
                    <label htmlFor="pays" className="mb-1 font-medium text-violet-400">Pays *</label>
                    <select
                      id="pays"
                      name="pays"
                      value={formData.pays}
                      onChange={handleChange}
                      className="bg-[#2a2a2a] border border-violet-600 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    >
                      <option>France</option>
                      <option>Belgique</option>
                      <option>Suisse</option>
                      <option>Canada</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Étape 3 */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div className="flex items-center mb-6">
                  <CreditCard className="w-7 h-7 text-violet-400 mr-4" />
                  <h2 className="text-3xl font-semibold text-violet-300">Informations de paiement</h2>
                </div>
                <InputField
                  label="Nom du porteur *"
                  name="nomPorteur"
                  value={formData.nomPorteur}
                  onChange={handleChange}
                  error={errors.nomPorteur}
                  placeholder="Nom tel qu'indiqué sur la carte"
                />
                <InputField
                  label="Numéro de carte *"
                  name="carteBancaire"
                  value={formData.carteBancaire}
                  onChange={(e) =>
                    setFormData({ ...formData, carteBancaire: formatCardNumber(e.target.value) })
                  }
                  error={errors.carteBancaire}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                />
                <div className="grid md:grid-cols-3 gap-6">
                  <InputField
                    label="Date d'expiration *"
                    name="dateExpiration"
                    value={formData.dateExpiration}
                    onChange={handleChange}
                    error={errors.dateExpiration}
                    placeholder="MM/AA"
                    maxLength={5}
                  />
                  <InputField
                    label="CVV *"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    error={errors.cvv}
                    placeholder="123"
                    maxLength={3}
                  />
                </div>
              </div>
            )}

            {/* Boutons */}
            <div className="flex justify-between mt-12">
              {currentStep > 1 ? (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="bg-transparent border border-violet-600 text-violet-400 hover:bg-violet-700 hover:text-white rounded-md px-6 py-3 transition"
                >
                  Retour
                </button>
              ) : (
                <div />
              )}
              {currentStep < 3 ? (
                <button
                  onClick={handleNext}
                  className="bg-violet-600 hover:bg-violet-700 text-white rounded-md px-6 py-3 transition"
                >
                  Suivant
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-green-600 hover:bg-green-700 text-white rounded-md px-6 py-3 transition"
                >
                  Valider la commande
                </button>
              )}
            </div>
          </div>

{/* Récapitulatif */}
<div className="bg-[#1a1a1a] rounded-xl shadow-xl p-8 flex flex-col justify-between">
  <div>
    <h2 className="text-2xl font-bold text-violet-400 mb-6">Récapitulatif</h2>
    <div className="space-y-3">
      <div className="flex justify-between text-gray-400">
        <span>Sous-total</span>
        <span>{Number(totals.subtotal).toFixed(2)} €</span>
      </div>
      <div className="flex justify-between text-gray-400">
        <span>Livraison</span>
        <span>{Number(totals.shipping).toFixed(2)} €</span>
      </div>
<div className="flex justify-between text-gray-400">
  <span>
    Taxe (20%) <em>incluse</em>
  </span>
  <span>{Number(totals.tax).toFixed(2)} €</span>
</div>
    </div>
  </div>

  <div className="border-t border-violet-700 mt-6 pt-6 flex justify-between items-center">
    <span className="text-xl font-bold text-white">Total</span>
    <span className="text-3xl font-extrabold text-violet-400">
      {Number(totals.total) > 50 ? "50.00" : Number(totals.total).toFixed(2)} €
    </span>
  </div>

  <div className="mt-8">
    <h3 className="text-lg font-semibold text-violet-400 mb-3">Boîte Mystère</h3>
    {animes.length > 0 ? (
      <ul className="list-disc list-inside text-gray-400">
        {animes.map((anime, i) => (
          <li key={i}>{anime}</li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-500 italic">Aucun anime sélectionné</p>
    )}
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  maxLength?: number;
}

const InputField = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  maxLength,
}: InputFieldProps) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="mb-2 font-medium text-violet-400">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      className={`bg-[#2a2a2a] border rounded-md py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 transition
      ${error ? "border-red-500" : "border-violet-600"}`}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

export default PaymentPage;
