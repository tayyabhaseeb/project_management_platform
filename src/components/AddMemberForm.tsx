import { useState } from "react";
import { AddMemberProps, MemberData } from "../models/Project";

const AddMemberForm: React.FC<AddMemberProps> = ({
  setTeamMembers,
  setActiveModal,
}) => {
  const [formData, setFormData] = useState<MemberData>({
    name: "",
    email: "",
    photo: null,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    photo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === "photo" && files) {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name ? "" : "Name is required.",
      email: formData.email ? "" : "Email is required.",
      photo: formData.photo ? "" : "Photo is required.",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((msg) => msg !== "");
    if (hasErrors) return;

    setTeamMembers((prev) => [...prev, formData]);

    setFormData({ name: "", email: "", photo: null });

    setActiveModal(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Photo
        </label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleChange}
          className="w-full"
        />
        {errors.photo && (
          <p className="text-sm text-red-500 mt-1">{errors.photo}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-[#1e6352] text-white px-4 py-2 rounded hover:bg-[#184e41]"
      >
        Add Member
      </button>
    </form>
  );
};

export default AddMemberForm;
