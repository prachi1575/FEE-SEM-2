import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LivePreview from '../Preview/Preview';
import styles from './CreateListing.module.css';

const CreateListing = () => {
    // --- Form State ---
    const [listingType, setListingType] = useState('Offering');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [files, setFiles] = useState([]);
    const [exchangeFor, setExchangeFor] = useState('');
    const [isOpenToAll, setIsOpenToAll] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // --- Form Data for Preview ---
    const previewData = {
        listingType, title, description, category, exchangeFor, isOpenToAll,
        user: { name: 'Your Name' },
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // --- Backend-Ready: Form Data ---
        const formData = new FormData();
        formData.append('listingType', listingType);
        formData.append('title', title);
        // ... append all other fields ...
        files.forEach((file) => formData.append('images', file));

        console.log("Submitting:", Object.fromEntries(formData));

        // --- TODO: Simulate API Call ---
        // try {
        //   const response = await fetch('/api/listings', { method: 'POST', body: formData });
        //   if (!response.ok) throw new Error('Failed to post listing.');
        //   const result = await response.json();
        //   navigate(`/item/${result.id}`); // Redirect to new listing
        // } catch (err) {
        //   setError(err.message);
        // } finally {
        //   setLoading(false);
        // }
        setTimeout(() => {
            setLoading(false);
            // navigate('/my-offers');
        }, 1500);
    };

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.heading}>
                <div className={styles.headingText}>
                    <p className={styles.title}>Create Your Listing</p>
                    <p className={styles.subtitle}>
                        Fill in the details below to create your offer or request.
                    </p>
                </div>
            </div>

            <form className={styles.layoutGrid} onSubmit={handleSubmit}>
                {/* Left Column: Form Fields */}
                <div className={styles.formColumn}>
                    {/* Segmented Control */}
                    <div className={styles.segmentedControl}>
                        <label className={styles.segmentLabel}>
                            <span className="truncate">I'm Offering</span>
                            <input
                                checked={listingType === 'Offering'}
                                onChange={(e) => setListingType(e.target.value)}
                                className="invisible" name="listing_type" type="radio" value="Offering"
                            />
                        </label>
                        <label className={styles.segmentLabel}>
                            <span className="truncate">I'm Requesting</span>
                            <input
                                checked={listingType === 'Requesting'}
                                onChange={(e) => setListingType(e.target.value)}
                                className="invisible" name="listing_type" type="radio" value="Requesting"
                            />
                        </label>
                    </div>

                    {/* Form Fields */}
                    <div className={styles.fieldsWrapper}>
                        <label className={styles.label}>
                            <p className={styles.labelText}>Title</p>
                            <input
                                className={styles.input} placeholder="e.g., Guitar Lessons"
                                value={title} onChange={(e) => setTitle(e.target.value)} required
                            />
                        </label>

                        <label className={styles.label}>
                            <p className={styles.labelText}>Description</p>
                            <textarea
                                className={styles.textarea} placeholder="Tell us more about what you're offering..."
                                value={description} onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </label>

                        <label className={styles.label}>
                            <p className={styles.labelText}>Category</p>
                            <div className={styles.selectWrapper}>
                                <select
                                    className={styles.select} value={category}
                                    onChange={(e) => setCategory(e.target.value)} required
                                >
                                    <option value="" disabled>Select a category...</option>
                                    <option value="Skill">Skill</option>
                                    <option value="Item">Item</option>
                                </select>
                                <div className={styles.selectIcon}>
                                    <span className="material-symbols-outlined">expand_more</span>
                                </div>
                            </div>
                        </label>

                        <div>
                            <p className={styles.labelText}>Upload Images</p>
                            <div className={styles.uploaderContainer}>
                                <label className={styles.uploaderLabel} htmlFor="dropzone-file">
                                    <div className={styles.uploaderContent}>
                                        <span className="material-symbols-outlined">cloud_upload</span>
                                        <p><span className={styles.uploaderBold}>Click to upload</span> or drag and drop</p>
                                        <p className={styles.uploaderHint}>PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input className="hidden" id="dropzone-file" type="file" multiple
                                        onChange={(e) => setFiles([...e.target.files])}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className={styles.exchangeBox}>
                            <label className={styles.label}>
                                <p className={styles.labelText}>In Exchange For</p>
                                <input
                                    className={`${styles.input} ${styles.exchangeInput}`}
                                    placeholder="What would you like in return?"
                                    value={exchangeFor} onChange={(e) => setExchangeFor(e.target.value)}
                                />
                            </label>
                            <label className={styles.checkboxLabel}>
                                <input
                                    className={styles.checkbox} type="checkbox"
                                    checked={isOpenToAll} onChange={(e) => setIsOpenToAll(e.target.checked)}
                                />
                                <span>Open to any type of exchange</span>
                            </label>
                        </div>

                        <div className={styles.actionButtons}>
                            <button type="button" className={`${styles.button} ${styles.draftButton}`} disabled={loading}>
                                Save as Draft
                            </button>
                            <button type="submit" className={`${styles.button} ${styles.postButton}`} disabled={loading}>
                                {loading ? 'Posting...' : 'Post Listing'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column: Live Preview */}
                <div className={styles.previewColumn}>
                    <div className={styles.previewSticky}>
                        <p className={styles.previewTitle}>Live Preview</p>
                        <LivePreview data={previewData} />
                    </div>
                </div>
            </form>
        </div>
    );
};
export default CreateListing;