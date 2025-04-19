import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const UploadForm = ({ onUpload }) => {
  const [form, setForm] = useState({
    caption: '',
    username: '',
    avatarUrl: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(form).forEach((key) => {
      data.append(key, form[key]);
    });

    try {
      await axios.post('http://localhost:5000/api/image', data);
      setForm({ caption: '', username: '', avatarUrl: '', image: null });
      onUpload();
    } catch (err) {
      console.error('Upload error:', err);
      alert('Upload failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form">
      <input
        name="caption"
        placeholder="Drop a spicy caption 🌶️🔥"
        value={form.caption}
        onChange={handleChange}
        required
      />
      <input
        name="username"
        placeholder="Enter your legendary name 🧙‍♂️✨"
        value={form.username}
        onChange={handleChange}
        required
      />
      <input
        name="avatarUrl"
        placeholder="Link to your fabulous piggy face 🐽📸"
        value={form.avatarUrl}
        onChange={handleChange}
        required
      />
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
        required
      />
      <button type="submit">📤 Yeet the Snap!</button>
    </form>
  );
  
};

export default UploadForm;
