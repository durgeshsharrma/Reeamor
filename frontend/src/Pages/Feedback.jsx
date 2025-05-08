import React from 'react';

const FeedbackSection = () => {
    return (
        <section className="bg-[#f4f4f4] py-16 px-6">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-center text-[#212529] mb-6">
                    Submit Your Feedback
                </h2>
                <p className="text-center text-sm text-gray-600 mb-10">
                    We'd love to hear your thoughts, suggestions, or concerns.
                </p>

                <form className="space-y-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#856fbb]"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#856fbb]"
                        />
                    </div>

                    <textarea
                        rows="5"
                        placeholder="Your feedback..."
                        className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#856fbb]"
                    ></textarea>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-[#856fbb] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#6d59b1] transition"
                        >
                            Submit Feedback
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default FeedbackSection;
